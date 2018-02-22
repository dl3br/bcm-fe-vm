FROM lyft/envoy:latest
RUN apt-get update
COPY envoy.yaml /etc/envoy.yaml
CMD /usr/local/bin/envoy -c /etc/envoy.yaml --service-cluster samplecluster --service-node sample1
