# Redis Playground

This repository demonstrates how to use Redis with Node.js using the `ioredis` library. The examples cover basic Redis operations such as setting and getting strings, working with lists, and caching API responses.

## Prerequisites

- Node.js installed
- Redis server running

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/redis-playground.git
    cd redis-playground
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Running the Examples

### 1. String Operations

The [string.js](http://_vscodecontentref_/0) file demonstrates how to set and get string values in Redis.

To run the example:
```sh
node string.js
```

# Redis Playground

This repository demonstrates how to use Redis with Node.js using the `ioredis` library. The examples cover basic Redis operations such as setting and getting strings, working with lists, and caching API responses.

## Prerequisites

- Node.js installed
- Redis server running

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/redis-playground.git
    cd redis-playground
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Running the Examples

### 1. String Operations

The [string.js](http://_vscodecontentref_/0) file demonstrates how to set and get string values in Redis.

To run the example:
```sh
node string.js
```

### 2. List Operations

The `list.js` file demonstrates how to work with lists in Redis, including pushing and popping elements.

To run the example:
```sh
node list.js
```
### 3. Caching API Responses

The `server.js` file sets up an Express server that caches API responses in Redis. When you access the root endpoint, it fetches data from an external API and caches it in Redis for 10 seconds.

To run the server:
```sh
node server.js
```

Then, open your browser and navigate to `http://localhost:9000`.

## Useful Links

- [Redis Data Types Documentation](https://redis.io/docs/latest/develop/data-types/)
- [ioredis on npm](https://www.npmjs.com/package/ioredis)

## Video Tutorial

For a detailed walkthrough of these examples, watch the following video: [Redis with Node.js Tutorial](https://www.youtube.com/watch?v=Vx2zPMPvmug)

## License

This project is licensed under the ISC License.
