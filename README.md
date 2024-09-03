### Hexlet tests and linter status:
[![Actions Status](https://github.com/miley777/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/miley777/frontend-project-46/actions)


[![Maintainability](https://api.codeclimate.com/v1/badges/d7637bca31bb1a0d79ae/maintainability)](https://codeclimate.com/github/miley777/frontend-project-46/maintainability)


[![Test Coverage](https://api.codeclimate.com/v1/badges/d7637bca31bb1a0d79ae/test_coverage)](https://codeclimate.com/github/miley777/frontend-project-46/test_coverage)


![eslint](https://github.com/user-attachments/assets/1095fdc9-f5df-4ec8-868a-521db943adca)

[![javascript](assets/images/js.png)](https://www.google.com/imgres?q=javscript&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F800px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2FJavaScript&docid=CkXirMXvIZwNmM&tbnid=4tmv5QgEHUtZcM&vet=12ahUKEwjA_oHvgaeIAxXXzQIHHUaLHQ0QM3oECBcQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwjA_oHvgaeIAxXXzQIHHUaLHQ0QM3oECBcQAA)

[![jest](assets/images/jest.png)](https://www.google.com/imgres?q=jest&imgurl=https%3A%2F%2Ficon.icepanel.io%2FTechnology%2Fsvg%2FJest.svg&imgrefurl=https%3A%2F%2Ftechicons.dev%2Ficons%2Fjest&docid=p1kXGhncA_irZM&tbnid=Ip0zCdI7qlZo-M&vet=12ahUKEwj3zsKAgqeIAxXd9AIHHevPMuUQM3oECEsQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwj3zsKAgqeIAxXd9AIHHevPMuUQM3oECEsQAA)

[![nodejs](assets/images/nodejs.png)](https://www.google.com/imgres?q=nodejs&imgurl=https%3A%2F%2Fwww.step2gen.com%2FWebsiteAssets%2Fassets%2Fimages%2Fnodejs.svg&imgrefurl=https%3A%2F%2Fwww.step2gen.com%2Fnodejs-development-company-india&docid=8_I5OX7v-tJP9M&tbnid=TKlYC5Us0bdROM&vet=12ahUKEwis2Ka1gqeIAxW40AIHHSvZNeUQM3oECH0QAA..i&w=2270&h=2500&hcb=2&ved=2ahUKEwis2Ka1gqeIAxW40AIHHSvZNeUQM3oECH0QAA)

## GenDiff cli-app

---

### App Description 

#### GenDiff is a cli-app determines the difference between two data structures.

### App capabilities:
- Support for different input formats: *json*, *yaml*.
- Generating a report in the form *stylish*, *json*, *plain*.

---

### Minimum system requirements

- Must have npm installed.
- Node v21.4.0 or higher. The version can be found in terminal: `node -v`

### Installation
!!!Following commands must be run from the app directory!

1. Clone the project repository: `git clone`.
2. Install dependencies: `make install` and then `make lint`.

### Usage

!!! Remember! All commands must be used in in terminal. The terminal must be run in app-directiry.

To view help information enter into you terminal: `gendiff -h`.

```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  output format (default: "stylish")
  -h, --help           display help for command
```
To view version enter into you terminal:`gendiff -V`.
```
12.0.0
```
Pattern for command to run the app: 
`gendiff -f [format options] __fixtures__/<filepath1> _fixtures__/<filepath2>`

`<filepath1> <filepath2>` are your files from the directory `__fixtures__`.

Options of format you can choose from:
- json
- plain
- stylish
Stylysh is a default format, if you need output in this format you can skip `-f` or `--format`. You can see skip of this option in examples below.

## Exapmles

### Comparison of two flat JSON-files (example with skipping `-f` or `--format`).

[![asciicast](https://asciinema.org/a/5nIgrvD83nQenFbpzTXZmKPR2.svg)](https://asciinema.org/a/5nIgrvD83nQenFbpzTXZmKPR2)

### Comparison of two flat YAML-files (example with skipping `-f` or `--format`).

[![asciicast](https://asciinema.org/a/iQwADRzOs8ORayITE4my1rya9.svg)](https://asciinema.org/a/iQwADRzOs8ORayITE4my1rya9)

### **STYLISH** Comparison of two nested JSON-files

[![asciicast](https://asciinema.org/a/FojiDrWOAVzwQ651J9ZVGgHRd.svg)](https://asciinema.org/a/FojiDrWOAVzwQ651J9ZVGgHRd)

### **STYLISH** Comparison of two nested YAML-files

[![asciicast](https://asciinema.org/a/EoXNCS8RsYASbMxSiFae5leOz.svg)](https://asciinema.org/a/EoXNCS8RsYASbMxSiFae5leOz)

### **PLAIN** Comparison of two nested JSON-files

[![asciicast](https://asciinema.org/a/4QimxPBpNOtCxgglS1GvOp4Wb.svg)](https://asciinema.org/a/4QimxPBpNOtCxgglS1GvOp4Wb)

### **PLAIN** Comparison of two nested YAML-files

[![asciicast](https://asciinema.org/a/yDhtI6U37LJeoAqMhgG8boiFB.svg)](https://asciinema.org/a/yDhtI6U37LJeoAqMhgG8boiFB)

### **JSON** Comparison of two nested JSON-files

[![asciicast](https://asciinema.org/a/iG5nYwwsT8DRNcPddc5UTegjO.svg)](https://asciinema.org/a/iG5nYwwsT8DRNcPddc5UTegjO)

### **JSON** Comparison of two nested YAML-files

[![asciicast](https://asciinema.org/a/5qPX3djPeySOiiV5oEkJj7HLM.svg)](https://asciinema.org/a/5qPX3djPeySOiiV5oEkJj7HLM)

## Test

To view code analysis run command: `make lint`

To view test-report run command: `make test`

To view test-coverage report run command: `make test-coverage`
