## Exercício 1

A)

- VARCHAR para caracteres texto
- PRIMARY KEY para chave de identificação única
- NOT NULL para campos obrigatório s e não nulos
- DATE para datas

B) SHOW DATABASES/TABLES mostra os nomes de cada tabela ou base de dados existente

C) DESCRIBE mostra como a tabela foi estruturada

## Exercício 2

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);
```

a) Error Code: 1136. Column count doesn't match value count at row 1 - passamos mais valores do que estipulado nas colunas.

b) Error Code: 1364. Field 'name' doesn't have a default value - não colocamos o campo name, que foi marcado como NOT NULL e por isso é obrigatório

c) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 - data de nascimento deve vir como string

## Exercício 3

```sql
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Tony Ramos";

SELECT * from Actor WHERE gender = "invalid";
```

c) A pesquisa é realizada, mas não encontra nenhum valor correspondente

e) Error Code: 1054. Unknown column 'nome' in 'field list' - o nome correto para a coluna é name.

```sql
SELECT id, name from Actor WHERE id = "002"
```

## Exercício 4

a) A query busca na tabela actor na coluna name valores que tenham A ou J e na coluna salary valores que sejam menores que 300000

```sql
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

SELECT * FROM Actor
WHERE
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
```

## Exercício 5

```sql
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```

## Exercício 6

```sql
SELECT id, title, rating FROM Movie WHERE id = "001";

SELECT * FROM Movie WHERE title = "Deus é Brasileiro";

SELECT id, title, synopsis FROM Movie WHERE rating > 7;
```

## Exercício 7

```sql
SELECT * FROM Movie WHERE title LIKE "%vida%";

SELECT * FROM Movie WHERE title LIKE "%Deus%" OR synopsis LIKE "%Deus%";

SELECT * FROM Movie WHERE release_Date < curdate();

SELECT * FROM Movie WHERE release_Date < CURDATE() AND (title LIKE "%Deus%" OR synopsis LIKE "%Deus%") AND rating > 7;
```
