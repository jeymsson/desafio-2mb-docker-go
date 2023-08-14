FROM golang:1.21.0-alpine3.18 AS builder
WORKDIR /go
COPY hello.go .
RUN go env -w GO111MODULE=auto
RUN go build -o hello .

FROM scratch
COPY --from=builder /go/hello .

CMD ["./hello"]