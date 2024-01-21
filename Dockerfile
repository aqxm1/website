FROM debian:bullseye-slim

RUN apt-get update && \
    apt-get install -y apache2 && \
    rm -rf /var/lib/apt/lists/*

RUN a2enmod rewrite

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf && \
    echo "<IfModule mpm_prefork_module>" >> /etc/apache2/apache2.conf && \
    echo "    StartServers          5" >> /etc/apache2/apache2.conf && \
    echo "    MinSpareServers       5" >> /etc/apache2/apache2.conf && \
    echo "    MaxSpareServers      10" >> /etc/apache2/apache2.conf && \
    echo "    MaxRequestWorkers     150" >> /etc/apache2/apache2.conf && \
    echo "    MaxConnectionsPerChild   0" >> /etc/apache2/apache2.conf && \
    echo "</IfModule>" >> /etc/apache2/apache2.conf

EXPOSE 80

COPY ./src/ /var/www/html/

RUN chown -R www-data:www-data /var/www/html/

CMD [ "apache2ctl", "-D", "FOREGROUND" ]