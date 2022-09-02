#Trabalho 1 - TP6 - NODE API
## Esse repositório contém uma API que recebe um POST contendo: ano, semestre e dias da semana. E devolve todas as datas do período em formato dd/MM

## Existem duas maneiras de executar

## Primeira: direto pelo servidor npm

## Abra o CMD para clonar o repositório

# Markdown
```
git clone https://github.com/MatGoulart3003/trabalho1_tec6.git</p>
cd trabalho1_tec6
cd trab1_tp6
npm start
```

## Segunda: criando um container

# Markdown
```
git clone https://github.com/MatGoulart3003/trabalho1_tec6.git</p>
cd trabalho1_tec6
cd trab1_tp6
docker build -t node .
docker run -p 21262:21262 -d node

```

## Endpoint da API para realizar o POST:
# Markdown
```
http://localhost:21262/api/v1/classes
```
## JSON Type
# Markdown
```
{
  "ano": "string",
  "semestre": "string",
  "dias_da_sem": [ "string" ]
}
```


## Mateus Goulart & Marcio Faria













