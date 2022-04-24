## Exercício 1

a) excluiria a coluna de salário
b) muda o nome da coluna gender para sex
c) muda a quantidade de caracteres permitidos na coluna gender
d)

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

## Exercícios 2

a)

```sql
UPDATE Actor
SET
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";
```

b)

```SQL
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```

c)

```sql
UPDATE Actor
SET
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";
```

d)

```sql
UPDATE Actor
SET
name = "Moacyr Franco",
WHERE id = "100";
```

Error Code: 1054. Unknown column 'rating' in 'field list'
0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0
Ao colocar uma coluna que não existe, aparece o primeiro erro. se colocar um valor de id que não existe, ele não encontra o valor e por isso não atualiza.

## Exercicio 3

```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```

```sql
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

## Exercicio 4

```sql
SELECT MAX(salary) FROM Actor

SELECT MIN(salary) FROM Actor WHERE gender = "female"

SELECT COUNT(*) FROM Actor WHERE gender = "female"

SELECT SUM(select) FROM Actor
```

## Exercicio 5

a) Essa query retorna a quantidade de valores da tabela Actor agrupados pelo gênero.

```sql
SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

## Exercicio 6

```sql
ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie CHANGE rating rating FLOAT;

UPDATE Movie
SET
	playing_limit_date = "2022-04-30"
WHERE id = "001"

UPDATE Movie
SET
	playing_limit_date = "2022-01-31"
WHERE id = "002"

Resposta: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Como o id foi deletado, ele buscou na tabela e não encontrou o valor, por isso não retornou resultados e não alterou nada.
```
