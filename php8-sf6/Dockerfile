FROM php:8.1.0-cli

RUN apt-get update \
    &&  apt-get install -y --no-install-recommends \
        locales apt-utils git libicu-dev g++ libpng-dev libxml2-dev libzip-dev libonig-dev libxslt-dev unzip libpq-dev nodejs npm wget \
        apt-transport-https lsb-release ca-certificates

RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen  \
    &&  echo "fr_FR.UTF-8 UTF-8" >> /etc/locale.gen \
    &&  locale-gen

RUN curl -sS https://getcomposer.org/installer | php -- \
    &&  mv composer.phar /usr/local/bin/composer

RUN curl -sS https://get.symfony.com/cli/installer | bash \
    &&  mv /root/.symfony5/bin/symfony /usr/local/bin

RUN docker-php-ext-configure \
            intl \
    &&  docker-php-ext-install \
            pdo pdo_mysql pdo_pgsql opcache intl zip calendar dom mbstring gd xsl

RUN pecl install apcu && docker-php-ext-enable apcu

RUN npm install --global yarn

# add right for primary user dev
RUN adduser --system --uid 1000 --no-create-home dev --group && ln -s /var/www /home/dev && chown -R dev:dev /home/dev/

RUN git config --global user.email "bang.dai2@gmail.com" \
    &&  git config --global user.name "bang-dai"
    &&  git config --global --add safe.directory /var/www/api


CMD tail -f /dev/null

WORKDIR /home/dev