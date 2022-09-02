#Trabalho 1 - TP6 - NODE API
## Esse repositório contém uma API que recebe um POST contendo: ano, semestre e dias da semana. E devolve todas as datas do período em formato dd/MM

<h1> Existem duas maneiras de executar<h1>

<h1> Primeira: direto pelo servidor npm <h1>

## Abra o CMD para clonar o repositório

```
git clone https://github.com/MatGoulart3003/trabalho1_tec6.git</p>
cd trabalho1_tec6
cd trab1_tp6
npm start
```

## Segunda: criando um container


```
git clone https://github.com/MatGoulart3003/trabalho1_tec6.git</p>
cd trabalho1_tec6
cd trab1_tp6
docker build -t node .
docker run -p 21262:21262 -d node

```

## Endpoint da API para realizar o POST:
```
http://localhost:21262/api/v1/classes
```
## JSON Type
```
{
  "ano": "string",
  "semestre": "string",
  "dias_da_sem": [ "string" ]
}
```


## Mateus Goulart & Marcio Faria













