import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, ApolloLink, from } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { ConfigService } from '../services/config.service';
import { onError } from '@apollo/client/link/error';
//local
// const uri = 'http://192.168.1.9:8000/graphql/'; // Replace with your GraphQL endpoint
// export const upload_url ='http://192.168.1.9:8000/files/upload/media/'

//prod
// const uri = 'http://160.155.42.246:8000/graphql/'; // Replace with your GraphQL endpoint
// export const upload_url = 'http://160.155.42.246:8000/files/upload/media/'

//dev
const uri = 'http://158.69.52.19:8012/graphql/'; // Replace with your GraphQL endpoint



export function createApollo(httpLink: HttpLink, _http: HttpClient): ApolloClientOptions<any> {
  let config = new ConfigService(_http)
  config.loadConfig()
  
  const http = httpLink.create({uri: uri});

  // const http = httpLink.create({uri: config.getConfig().apiUrl});

   // Track ongoing request
   let abortController: AbortController | null = null;
   let ongoingRequest: { operationName: string; variables: any } | null = null;
 
   // Custom ApolloLink for cancellation logic
   const cancelLink = new ApolloLink((operation, forward) => {
     const { operationName, variables } = operation;
     
 
     // Cancel the ongoing request if it's the same as the new one
     if (
       abortController &&
       ongoingRequest &&
       ongoingRequest.operationName === operationName &&
       JSON.stringify(ongoingRequest.variables) === JSON.stringify(variables)
     ) {
       abortController.abort();
     }
 
     // Create a new AbortController for the current request
     abortController = new AbortController();
     ongoingRequest = { operationName, variables };
 
     // Attach signal to context
     operation.setContext({
       fetchOptions: {
         signal: abortController.signal,
       },
     });
 
     return forward(operation);
   });

  const authLink = new ApolloLink((operation, forward) => {
    // Retrieve the token from local storage or any other storage mechanism
    const token = localStorage.getItem('token') || '';

    operation.setContext({
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    });

    return forward(operation);
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      });
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          searchPermission: {
            keyArgs: ["name_Icontains"],
            merge(existing = {}, incoming) {
              return {
                ...incoming,
                results: [...(existing.results || []), ...incoming.results],
              };
            },
          },
        },
      },
      PermissionListType: {
        keyFields: ["id"], // Utilisation du champ 'id' pour la fusion des objets
      },
    },
  });

  return {
    link: from([cancelLink, authLink, errorLink,http ]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  imports: [HttpClientModule, ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
