const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const jobProtoPath = 'job.proto';
const jobProtoDefinition = protoLoader.loadSync(jobProtoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const jobProto = grpc.loadPackageDefinition(jobProtoDefinition).job;

const jobService = {
  getJob: (call, callback) => {

    const job = {
      id: call.request.job_id,
      title: 'Example Job',
      description: 'This is an example job.',
  
    };
    callback(null, {job});
  },
  searchJobs: (call, callback) => {
    const { query } = call.request;

    const jobs = [
      {
        id: '1',
        title: 'Example Job 1',
        description: 'This is the first example job.',
      },
      {
        id: '2',
        title: 'Example Job 2',
        description: 'This is the second example job.',
      },

    ];
    callback(null, { jobs });
  },
  createJob: (call, callback) => {
    const { query } = call.request;
    const job = {
      id: call.request.job_id,
      title: call.request.title,
      description: call.request.description,

    };
    callback(null, {job});
  }

};


const server = new grpc.Server();
server.addService(jobProto.JobService.service, jobService);
const port = 50054;
server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error('Failed to bind server:', err);
      return;
    }
  
    console.log(`Server is running on port ${port}`);
    server.start();
  });
console.log(`Job microservice running on port ${port}`);
