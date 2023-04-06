# Demo navigo build with Symfony 6.2 + PHP 8.1.0 with Docker

## Requirements and configure

this docker-compose is designed for a Linux operating system, provide adaptations for a Mac or Windows environment.

* Linux (Ubuntu 20.04 or other)
* docker
* docker-compose
* git
* yarn
* node

Add group for your user to avoid sudo: https://docs.docker.com/engine/install/linux-postinstall


Run the docker-compose to build your local environment

```bash
  docker-compose build
  docker-compose up -d
```

## Install and launch

Copy .env.dist to .env and modify the .env file like this example to adapt your uses:

```yaml
  DATABASE_URL="mysql://root:root@mysql:3306/navigo?serverVersion=mariadb-10.3.29&charset=utf8mb4"
```

1. Log into the PHP container `docker-compose exec php bash`
2. Install dependencies : `cd api && composer install`
3. Create database: `php bin/console d:d:c`
4. Play migrations : `php bin/console make:migration` then `php bin/console d:m:m`
5. Play fixtures : `php bin/console d:f:l --no-interaction`
6. Start the server : `symfony serve -d`

*Your application will be at http://127.0.0.1:8000*


## Ready to use with

This docker-compose provides you :

- PHP-8.1.0-cli (Debian)
    - Composer
    - Symfony CLI
    - and some other php extentions
    - nodejs, npm, yarn
- mariadb/server:10.3
- maildev (mailcatcher)
