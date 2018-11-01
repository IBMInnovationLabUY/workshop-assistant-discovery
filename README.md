# Dojo Watson Conversation + Watson Discovery

Template a utilizar para el dojo de conexión entre los servicios Watson Conversation y Discovery.

1. Clona la aplicación a tu entorno local desde tu terminal con el siguiente comando:

  ```
  git clone https://github.com/IBMInnovationLabUY/dojo-conversation-discovery
  ```

2. Cd dentro del nuevo directorio creado

3. Instalar las dependencias del proyecto

  ```
  npm install
  ```

4. Crea tu archivo de variables de entorno usando de ejemplo .env.example

  ```
  copy .env.example .env
  ```

  
5. Reemplaza los datos por los de tu servicio de Conversation y Discovery 

  ```
  # Conversation
  WORKSPACE_ID=<workspace-id>
  ASSISTANT_USERNAME=<conversation-username>
  ASSISTANT_PASSWORD=<conversation-password>

  # Discovery
  DISCOVERY_USERNAME=<discovery-username>
  DISCOVERY_PASSWORD=<discovery-password>
  ENVIRONMENT_ID=<environment-id>
  COLLECTION_ID=<collection-id>
  ```

5. Una vez termines de editar tu código y seguir los pasos del dojo, inicia tu app y pruebala.

  ```
  npm start
  ```



#Repositorio original del template base:

https://github.com/watson-developer-cloud/assistant-simple

#Otros repositorios de interes:

https://github.com/watson-developer-cloud/assistant-with-discovery (Java)

https://github.com/watson-developer-cloud/assistant-with-discovery-openwhisk (openwhisk)