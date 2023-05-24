const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const categoriProtoPath = 'categori.proto';
const categoriProtoDefinition = protoLoader.loadSync(categoriProtoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const categoriProto = grpc.loadPackageDefinition(categoriProtoDefinition).categori;

const categoriService = {
  getCategori: (call, callback) => {

    const categori = {
      id: call.request.categori_id,
      title: 'Example Ctegori',
      description: 'This is an example categori.',
  
    };
    callback(null, {categori});
  },
  searchCategoris: (call, callback) => {
    const { query } = call.request;

    const categoris = [
      {
        id: '1',
        title: 'Example Categori 1',
        description: 'This is the first example categori.',
      },
      {
        id: '2',
        title: 'Example Categori 2',
        description: 'This is the second example categori.',
      },

    ];
    callback(null, { categoris });
  },
  createCategori: (call, callback) => {
    const { query } = call.request;
    const categori = {
      id: call.request.categori_id,
      title: call.request.title,
      description: call.request.description,

    };
    callback(null, {categori});
  }

};


const server = new grpc.Server();
server.addService(categoriProto.CategoriService.service, categoriService);
const port = 50060;
server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error('Failed to bind server:', err);
      return;
    }
  
    console.log(`Server is running on port ${port}`);
    server.start();
  });
console.log(`Categori microservice running on port ${port}`);
