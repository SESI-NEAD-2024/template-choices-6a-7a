![versão](https://img.shields.io/static/v1?label=versão&message=v4v&color=%23f44336)

# Projeto de aula SCORM
Use os arquivos para desenvolvimento e no final gere a build para fazer upload no LMS.

## ✨ Exemplo
![Exemplo de diretórios ao buildar](docs/exemplo.png)
- O ZIP é o pacote SCORM para ser usado no LMS.
- A pasta scorm_open são os arquivos que compõe o pacote SCORM antes do zip.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Node instalado
- Npm instalado
- Gulp instalado


## 🚀 Instalando na sua máquina

Para instalar, siga estas etapas na raíz do projeto:

```
npm install
```
Havendo o arquivo *package.json*, as dependências serão instaladas corretamente deixando o projeto pronto para fazer a build.

## ☕ Gerando Build e pacote scorm
Gera a pasta *dist* e dentro, estará o pacote SCORM zipado para upload no LMS.
Na raíz do projeto:

```
gulp
```

## Compilar Sass no desenvolvimento

```
gulp watch
```

## 🤝 Qualquer dúvida, entre em contato:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/oKelvinCosta" title="Kelvin Costa Github">
        <img style="border-radius:50%" src="docs/kelvin.jpg" width="70px;" alt="Kelvin Costa"/><br>
        <sub>
          <b>Kelvin Costa</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/pedropeixotobr" title="Pedro Peixoto Github">
        <img style="border-radius:50%" src="docs/pedro.jpg" width="70px;" alt="Pedro Peixoto"/><br>
        <sub>
          <b>Pedro Peixoto</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

