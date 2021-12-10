# NestJSのテンプレート

## コンセプト

### ドメインロジック、ユースケースロジックのテスタビリティを高めたい

ドメインのルールとそれ以外の関心（永続化の仕組みや外部サービスとの接続など）を、interfaceによって分離できるようにした。

ドメインロジックやユースケースロジックのテストでは、コンストラクターやDIでモックを注入してテストが書きやすいようになっている。

### 変更の影響が最小限になるようにしたい

ドメインロジックはそれ以外の何にも依存しないようにして、ドメインロジック以外の変更の影響がドメインロジックには影響しないようにした。

### コーディングの生産性を高めたい

ボイラーテンプレートの多さが原因でコーディングの生産性が低下することを防ぐため、scaffoldで必要最低限のコードを生成できるようにした。

## ディレクトリ構成

```plaintext
src
├── __shared__
│   └── [shared class, function, type, etc]
├── domain
│   ├── __shared__
│   │   └── [shared class, function, type, etc]
│   └── [domain]
│       ├── model
│       │   └── [domain models, tests]
│       └── service
│           ├── command
│           │   └── [command interfaces]
│           └── query
│               └── [query interfaces]
├── infrastructure
│   ├── prisma
│   │   └── [domain]
│   │       ├── command
│   │       │   └── [command implementations]
│   │       └── query
│   │           └── [query implementations]
│   └── [external data sources]
│
├── main.ts
├── nest-module
│   ├── app.module.ts
│   ├── prisma.service.ts
│   └── [domain]
│       ├── dto
│       │   └── [dto for request]
│       ├── [domain].controller.ts
│       ├── [domain].module.ts
│       └── [domain].service.ts
└── use-case
    └── [use-case]
        ├── index.spec.ts
        └── index.ts
```

### `domain`

ドメインロジックを表現したクラス等を置く。`src/domain`のみに閉じていて、`infrastructure`、`use-case`、`nest-module`のいずれにも依存しない。

#### `model`

`AggregateRoot`、`Entity`、`ValueObject`（いずれも`src/domain/__shared__`にある）のいずれかを継承したclassを実装する。

#### `service`

`AggregateRoot`、`Entity`、`ValueObject`では表現できないロジック等を実装する。たとえば永続化層を意識した処理などは、interfaceとしてここに置く。

`command`には「副作用があり値を返さない処理」、`query`には「副作用がなく値を返す処理」を置く。`service`配下の処理は`command`か`query`かのいずれかに分類できるように設計する。

### `infrastructure`

DBなどの永続化層の処理や外部サービスとの接続の処理などを置く。`domain/services`に置いてあるinterfaceは、ここで実装する。

### `use-case`

`src/domain`のclassやinterfaceなどを組み合わせて、アプリケーションに要求される処理を組み立てる。処理の組み合わせ・組み立てのみに専念し、ドメインロジックはここに書いてはいけない。

### `nest-module`

NestJS特有の処理はここに置く。

#### `dto`

`class-validator`を使って、リクエストのバリデーションを定義する。

#### `.service.ts`

`src/use-case`の処理を実行する。

#### `.controller.ts`

- リクエストに応じて`.service.ts`の処理を呼びだす
- エラーをキャッチして、HttpExceptionをthrowする。

#### `.module.ts`

Controller・Serviceの登録を行う。

`src/infrastructure`で実装した処理を`.service.ts`のクラスにDIする。
