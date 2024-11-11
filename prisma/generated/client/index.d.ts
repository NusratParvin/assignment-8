
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model BorrowRecord
 * 
 */
export type BorrowRecord = $Result.DefaultSelection<Prisma.$BorrowRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Books
 * const books = await prisma.book.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Books
   * const books = await prisma.book.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs>;

  /**
   * `prisma.borrowRecord`: Exposes CRUD operations for the **BorrowRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BorrowRecords
    * const borrowRecords = await prisma.borrowRecord.findMany()
    * ```
    */
  get borrowRecord(): Prisma.BorrowRecordDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Book: 'Book',
    Member: 'Member',
    BorrowRecord: 'BorrowRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "book" | "member" | "borrowRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      BorrowRecord: {
        payload: Prisma.$BorrowRecordPayload<ExtArgs>
        fields: Prisma.BorrowRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BorrowRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BorrowRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRecordPayload>
          }
          findFirst: {
            args: Prisma.BorrowRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BorrowRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRecordPayload>
          }
          findMany: {
            args: Prisma.BorrowRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRecordPayload>[]
          }
          create: {
            args: Prisma.BorrowRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRecordPayload>
          }
          createMany: {
            args: Prisma.BorrowRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BorrowRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRecordPayload>[]
          }
          delete: {
            args: Prisma.BorrowRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRecordPayload>
          }
          update: {
            args: Prisma.BorrowRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRecordPayload>
          }
          deleteMany: {
            args: Prisma.BorrowRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BorrowRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BorrowRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRecordPayload>
          }
          aggregate: {
            args: Prisma.BorrowRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBorrowRecord>
          }
          groupBy: {
            args: Prisma.BorrowRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<BorrowRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.BorrowRecordCountArgs<ExtArgs>
            result: $Utils.Optional<BorrowRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    BorrowRecord: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BorrowRecord?: boolean | BookCountOutputTypeCountBorrowRecordArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBorrowRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowRecordWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    BorrowRecord: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BorrowRecord?: boolean | MemberCountOutputTypeCountBorrowRecordArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountBorrowRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    publishedYear: number | null
    totalCopies: number | null
    availableCopies: number | null
  }

  export type BookSumAggregateOutputType = {
    publishedYear: number | null
    totalCopies: number | null
    availableCopies: number | null
  }

  export type BookMinAggregateOutputType = {
    bookId: string | null
    title: string | null
    genre: string | null
    publishedYear: number | null
    totalCopies: number | null
    availableCopies: number | null
  }

  export type BookMaxAggregateOutputType = {
    bookId: string | null
    title: string | null
    genre: string | null
    publishedYear: number | null
    totalCopies: number | null
    availableCopies: number | null
  }

  export type BookCountAggregateOutputType = {
    bookId: number
    title: number
    genre: number
    publishedYear: number
    totalCopies: number
    availableCopies: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    publishedYear?: true
    totalCopies?: true
    availableCopies?: true
  }

  export type BookSumAggregateInputType = {
    publishedYear?: true
    totalCopies?: true
    availableCopies?: true
  }

  export type BookMinAggregateInputType = {
    bookId?: true
    title?: true
    genre?: true
    publishedYear?: true
    totalCopies?: true
    availableCopies?: true
  }

  export type BookMaxAggregateInputType = {
    bookId?: true
    title?: true
    genre?: true
    publishedYear?: true
    totalCopies?: true
    availableCopies?: true
  }

  export type BookCountAggregateInputType = {
    bookId?: true
    title?: true
    genre?: true
    publishedYear?: true
    totalCopies?: true
    availableCopies?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    bookId: string
    title: string
    genre: string
    publishedYear: number
    totalCopies: number
    availableCopies: number
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    title?: boolean
    genre?: boolean
    publishedYear?: boolean
    totalCopies?: boolean
    availableCopies?: boolean
    BorrowRecord?: boolean | Book$BorrowRecordArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    title?: boolean
    genre?: boolean
    publishedYear?: boolean
    totalCopies?: boolean
    availableCopies?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    bookId?: boolean
    title?: boolean
    genre?: boolean
    publishedYear?: boolean
    totalCopies?: boolean
    availableCopies?: boolean
  }

  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BorrowRecord?: boolean | Book$BorrowRecordArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      BorrowRecord: Prisma.$BorrowRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      bookId: string
      title: string
      genre: string
      publishedYear: number
      totalCopies: number
      availableCopies: number
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `bookId`
     * const bookWithBookIdOnly = await prisma.book.findMany({ select: { bookId: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `bookId`
     * const bookWithBookIdOnly = await prisma.book.createManyAndReturn({ 
     *   select: { bookId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    BorrowRecord<T extends Book$BorrowRecordArgs<ExtArgs> = {}>(args?: Subset<T, Book$BorrowRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowRecordPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */ 
  interface BookFieldRefs {
    readonly bookId: FieldRef<"Book", 'String'>
    readonly title: FieldRef<"Book", 'String'>
    readonly genre: FieldRef<"Book", 'String'>
    readonly publishedYear: FieldRef<"Book", 'Int'>
    readonly totalCopies: FieldRef<"Book", 'Int'>
    readonly availableCopies: FieldRef<"Book", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
  }

  /**
   * Book.BorrowRecord
   */
  export type Book$BorrowRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRecord
     */
    select?: BorrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRecordInclude<ExtArgs> | null
    where?: BorrowRecordWhereInput
    orderBy?: BorrowRecordOrderByWithRelationInput | BorrowRecordOrderByWithRelationInput[]
    cursor?: BorrowRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowRecordScalarFieldEnum | BorrowRecordScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    memberId: string | null
    name: string | null
    email: string | null
    phone: string | null
    membershipDate: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    memberId: string | null
    name: string | null
    email: string | null
    phone: string | null
    membershipDate: Date | null
  }

  export type MemberCountAggregateOutputType = {
    memberId: number
    name: number
    email: number
    phone: number
    membershipDate: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    memberId?: true
    name?: true
    email?: true
    phone?: true
    membershipDate?: true
  }

  export type MemberMaxAggregateInputType = {
    memberId?: true
    name?: true
    email?: true
    phone?: true
    membershipDate?: true
  }

  export type MemberCountAggregateInputType = {
    memberId?: true
    name?: true
    email?: true
    phone?: true
    membershipDate?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    memberId: string
    name: string
    email: string
    phone: string
    membershipDate: Date
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    memberId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    membershipDate?: boolean
    BorrowRecord?: boolean | Member$BorrowRecordArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    memberId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    membershipDate?: boolean
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    memberId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    membershipDate?: boolean
  }

  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BorrowRecord?: boolean | Member$BorrowRecordArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      BorrowRecord: Prisma.$BorrowRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      memberId: string
      name: string
      email: string
      phone: string
      membershipDate: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `memberId`
     * const memberWithMemberIdOnly = await prisma.member.findMany({ select: { memberId: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `memberId`
     * const memberWithMemberIdOnly = await prisma.member.createManyAndReturn({ 
     *   select: { memberId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    BorrowRecord<T extends Member$BorrowRecordArgs<ExtArgs> = {}>(args?: Subset<T, Member$BorrowRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowRecordPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Member model
   */ 
  interface MemberFieldRefs {
    readonly memberId: FieldRef<"Member", 'String'>
    readonly name: FieldRef<"Member", 'String'>
    readonly email: FieldRef<"Member", 'String'>
    readonly phone: FieldRef<"Member", 'String'>
    readonly membershipDate: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
  }

  /**
   * Member.BorrowRecord
   */
  export type Member$BorrowRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRecord
     */
    select?: BorrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRecordInclude<ExtArgs> | null
    where?: BorrowRecordWhereInput
    orderBy?: BorrowRecordOrderByWithRelationInput | BorrowRecordOrderByWithRelationInput[]
    cursor?: BorrowRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowRecordScalarFieldEnum | BorrowRecordScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model BorrowRecord
   */

  export type AggregateBorrowRecord = {
    _count: BorrowRecordCountAggregateOutputType | null
    _min: BorrowRecordMinAggregateOutputType | null
    _max: BorrowRecordMaxAggregateOutputType | null
  }

  export type BorrowRecordMinAggregateOutputType = {
    borrowId: string | null
    borrowDate: Date | null
    returnDate: Date | null
    bookId: string | null
    memberId: string | null
  }

  export type BorrowRecordMaxAggregateOutputType = {
    borrowId: string | null
    borrowDate: Date | null
    returnDate: Date | null
    bookId: string | null
    memberId: string | null
  }

  export type BorrowRecordCountAggregateOutputType = {
    borrowId: number
    borrowDate: number
    returnDate: number
    bookId: number
    memberId: number
    _all: number
  }


  export type BorrowRecordMinAggregateInputType = {
    borrowId?: true
    borrowDate?: true
    returnDate?: true
    bookId?: true
    memberId?: true
  }

  export type BorrowRecordMaxAggregateInputType = {
    borrowId?: true
    borrowDate?: true
    returnDate?: true
    bookId?: true
    memberId?: true
  }

  export type BorrowRecordCountAggregateInputType = {
    borrowId?: true
    borrowDate?: true
    returnDate?: true
    bookId?: true
    memberId?: true
    _all?: true
  }

  export type BorrowRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BorrowRecord to aggregate.
     */
    where?: BorrowRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowRecords to fetch.
     */
    orderBy?: BorrowRecordOrderByWithRelationInput | BorrowRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BorrowRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BorrowRecords
    **/
    _count?: true | BorrowRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BorrowRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BorrowRecordMaxAggregateInputType
  }

  export type GetBorrowRecordAggregateType<T extends BorrowRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateBorrowRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBorrowRecord[P]>
      : GetScalarType<T[P], AggregateBorrowRecord[P]>
  }




  export type BorrowRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowRecordWhereInput
    orderBy?: BorrowRecordOrderByWithAggregationInput | BorrowRecordOrderByWithAggregationInput[]
    by: BorrowRecordScalarFieldEnum[] | BorrowRecordScalarFieldEnum
    having?: BorrowRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BorrowRecordCountAggregateInputType | true
    _min?: BorrowRecordMinAggregateInputType
    _max?: BorrowRecordMaxAggregateInputType
  }

  export type BorrowRecordGroupByOutputType = {
    borrowId: string
    borrowDate: Date
    returnDate: Date | null
    bookId: string
    memberId: string
    _count: BorrowRecordCountAggregateOutputType | null
    _min: BorrowRecordMinAggregateOutputType | null
    _max: BorrowRecordMaxAggregateOutputType | null
  }

  type GetBorrowRecordGroupByPayload<T extends BorrowRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BorrowRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BorrowRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BorrowRecordGroupByOutputType[P]>
            : GetScalarType<T[P], BorrowRecordGroupByOutputType[P]>
        }
      >
    >


  export type BorrowRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    borrowId?: boolean
    borrowDate?: boolean
    returnDate?: boolean
    bookId?: boolean
    memberId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowRecord"]>

  export type BorrowRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    borrowId?: boolean
    borrowDate?: boolean
    returnDate?: boolean
    bookId?: boolean
    memberId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowRecord"]>

  export type BorrowRecordSelectScalar = {
    borrowId?: boolean
    borrowDate?: boolean
    returnDate?: boolean
    bookId?: boolean
    memberId?: boolean
  }

  export type BorrowRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type BorrowRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $BorrowRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BorrowRecord"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      borrowId: string
      borrowDate: Date
      returnDate: Date | null
      bookId: string
      memberId: string
    }, ExtArgs["result"]["borrowRecord"]>
    composites: {}
  }

  type BorrowRecordGetPayload<S extends boolean | null | undefined | BorrowRecordDefaultArgs> = $Result.GetResult<Prisma.$BorrowRecordPayload, S>

  type BorrowRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BorrowRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BorrowRecordCountAggregateInputType | true
    }

  export interface BorrowRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BorrowRecord'], meta: { name: 'BorrowRecord' } }
    /**
     * Find zero or one BorrowRecord that matches the filter.
     * @param {BorrowRecordFindUniqueArgs} args - Arguments to find a BorrowRecord
     * @example
     * // Get one BorrowRecord
     * const borrowRecord = await prisma.borrowRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BorrowRecordFindUniqueArgs>(args: SelectSubset<T, BorrowRecordFindUniqueArgs<ExtArgs>>): Prisma__BorrowRecordClient<$Result.GetResult<Prisma.$BorrowRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BorrowRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BorrowRecordFindUniqueOrThrowArgs} args - Arguments to find a BorrowRecord
     * @example
     * // Get one BorrowRecord
     * const borrowRecord = await prisma.borrowRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BorrowRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, BorrowRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BorrowRecordClient<$Result.GetResult<Prisma.$BorrowRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BorrowRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowRecordFindFirstArgs} args - Arguments to find a BorrowRecord
     * @example
     * // Get one BorrowRecord
     * const borrowRecord = await prisma.borrowRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BorrowRecordFindFirstArgs>(args?: SelectSubset<T, BorrowRecordFindFirstArgs<ExtArgs>>): Prisma__BorrowRecordClient<$Result.GetResult<Prisma.$BorrowRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BorrowRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowRecordFindFirstOrThrowArgs} args - Arguments to find a BorrowRecord
     * @example
     * // Get one BorrowRecord
     * const borrowRecord = await prisma.borrowRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BorrowRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, BorrowRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__BorrowRecordClient<$Result.GetResult<Prisma.$BorrowRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BorrowRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BorrowRecords
     * const borrowRecords = await prisma.borrowRecord.findMany()
     * 
     * // Get first 10 BorrowRecords
     * const borrowRecords = await prisma.borrowRecord.findMany({ take: 10 })
     * 
     * // Only select the `borrowId`
     * const borrowRecordWithBorrowIdOnly = await prisma.borrowRecord.findMany({ select: { borrowId: true } })
     * 
     */
    findMany<T extends BorrowRecordFindManyArgs>(args?: SelectSubset<T, BorrowRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BorrowRecord.
     * @param {BorrowRecordCreateArgs} args - Arguments to create a BorrowRecord.
     * @example
     * // Create one BorrowRecord
     * const BorrowRecord = await prisma.borrowRecord.create({
     *   data: {
     *     // ... data to create a BorrowRecord
     *   }
     * })
     * 
     */
    create<T extends BorrowRecordCreateArgs>(args: SelectSubset<T, BorrowRecordCreateArgs<ExtArgs>>): Prisma__BorrowRecordClient<$Result.GetResult<Prisma.$BorrowRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BorrowRecords.
     * @param {BorrowRecordCreateManyArgs} args - Arguments to create many BorrowRecords.
     * @example
     * // Create many BorrowRecords
     * const borrowRecord = await prisma.borrowRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BorrowRecordCreateManyArgs>(args?: SelectSubset<T, BorrowRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BorrowRecords and returns the data saved in the database.
     * @param {BorrowRecordCreateManyAndReturnArgs} args - Arguments to create many BorrowRecords.
     * @example
     * // Create many BorrowRecords
     * const borrowRecord = await prisma.borrowRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BorrowRecords and only return the `borrowId`
     * const borrowRecordWithBorrowIdOnly = await prisma.borrowRecord.createManyAndReturn({ 
     *   select: { borrowId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BorrowRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, BorrowRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BorrowRecord.
     * @param {BorrowRecordDeleteArgs} args - Arguments to delete one BorrowRecord.
     * @example
     * // Delete one BorrowRecord
     * const BorrowRecord = await prisma.borrowRecord.delete({
     *   where: {
     *     // ... filter to delete one BorrowRecord
     *   }
     * })
     * 
     */
    delete<T extends BorrowRecordDeleteArgs>(args: SelectSubset<T, BorrowRecordDeleteArgs<ExtArgs>>): Prisma__BorrowRecordClient<$Result.GetResult<Prisma.$BorrowRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BorrowRecord.
     * @param {BorrowRecordUpdateArgs} args - Arguments to update one BorrowRecord.
     * @example
     * // Update one BorrowRecord
     * const borrowRecord = await prisma.borrowRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BorrowRecordUpdateArgs>(args: SelectSubset<T, BorrowRecordUpdateArgs<ExtArgs>>): Prisma__BorrowRecordClient<$Result.GetResult<Prisma.$BorrowRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BorrowRecords.
     * @param {BorrowRecordDeleteManyArgs} args - Arguments to filter BorrowRecords to delete.
     * @example
     * // Delete a few BorrowRecords
     * const { count } = await prisma.borrowRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BorrowRecordDeleteManyArgs>(args?: SelectSubset<T, BorrowRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BorrowRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BorrowRecords
     * const borrowRecord = await prisma.borrowRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BorrowRecordUpdateManyArgs>(args: SelectSubset<T, BorrowRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BorrowRecord.
     * @param {BorrowRecordUpsertArgs} args - Arguments to update or create a BorrowRecord.
     * @example
     * // Update or create a BorrowRecord
     * const borrowRecord = await prisma.borrowRecord.upsert({
     *   create: {
     *     // ... data to create a BorrowRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BorrowRecord we want to update
     *   }
     * })
     */
    upsert<T extends BorrowRecordUpsertArgs>(args: SelectSubset<T, BorrowRecordUpsertArgs<ExtArgs>>): Prisma__BorrowRecordClient<$Result.GetResult<Prisma.$BorrowRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BorrowRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowRecordCountArgs} args - Arguments to filter BorrowRecords to count.
     * @example
     * // Count the number of BorrowRecords
     * const count = await prisma.borrowRecord.count({
     *   where: {
     *     // ... the filter for the BorrowRecords we want to count
     *   }
     * })
    **/
    count<T extends BorrowRecordCountArgs>(
      args?: Subset<T, BorrowRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BorrowRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BorrowRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BorrowRecordAggregateArgs>(args: Subset<T, BorrowRecordAggregateArgs>): Prisma.PrismaPromise<GetBorrowRecordAggregateType<T>>

    /**
     * Group by BorrowRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BorrowRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BorrowRecordGroupByArgs['orderBy'] }
        : { orderBy?: BorrowRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BorrowRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBorrowRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BorrowRecord model
   */
  readonly fields: BorrowRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BorrowRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BorrowRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BorrowRecord model
   */ 
  interface BorrowRecordFieldRefs {
    readonly borrowId: FieldRef<"BorrowRecord", 'String'>
    readonly borrowDate: FieldRef<"BorrowRecord", 'DateTime'>
    readonly returnDate: FieldRef<"BorrowRecord", 'DateTime'>
    readonly bookId: FieldRef<"BorrowRecord", 'String'>
    readonly memberId: FieldRef<"BorrowRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BorrowRecord findUnique
   */
  export type BorrowRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRecord
     */
    select?: BorrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRecordInclude<ExtArgs> | null
    /**
     * Filter, which BorrowRecord to fetch.
     */
    where: BorrowRecordWhereUniqueInput
  }

  /**
   * BorrowRecord findUniqueOrThrow
   */
  export type BorrowRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRecord
     */
    select?: BorrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRecordInclude<ExtArgs> | null
    /**
     * Filter, which BorrowRecord to fetch.
     */
    where: BorrowRecordWhereUniqueInput
  }

  /**
   * BorrowRecord findFirst
   */
  export type BorrowRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRecord
     */
    select?: BorrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRecordInclude<ExtArgs> | null
    /**
     * Filter, which BorrowRecord to fetch.
     */
    where?: BorrowRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowRecords to fetch.
     */
    orderBy?: BorrowRecordOrderByWithRelationInput | BorrowRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BorrowRecords.
     */
    cursor?: BorrowRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BorrowRecords.
     */
    distinct?: BorrowRecordScalarFieldEnum | BorrowRecordScalarFieldEnum[]
  }

  /**
   * BorrowRecord findFirstOrThrow
   */
  export type BorrowRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRecord
     */
    select?: BorrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRecordInclude<ExtArgs> | null
    /**
     * Filter, which BorrowRecord to fetch.
     */
    where?: BorrowRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowRecords to fetch.
     */
    orderBy?: BorrowRecordOrderByWithRelationInput | BorrowRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BorrowRecords.
     */
    cursor?: BorrowRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BorrowRecords.
     */
    distinct?: BorrowRecordScalarFieldEnum | BorrowRecordScalarFieldEnum[]
  }

  /**
   * BorrowRecord findMany
   */
  export type BorrowRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRecord
     */
    select?: BorrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRecordInclude<ExtArgs> | null
    /**
     * Filter, which BorrowRecords to fetch.
     */
    where?: BorrowRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowRecords to fetch.
     */
    orderBy?: BorrowRecordOrderByWithRelationInput | BorrowRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BorrowRecords.
     */
    cursor?: BorrowRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowRecords.
     */
    skip?: number
    distinct?: BorrowRecordScalarFieldEnum | BorrowRecordScalarFieldEnum[]
  }

  /**
   * BorrowRecord create
   */
  export type BorrowRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRecord
     */
    select?: BorrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a BorrowRecord.
     */
    data: XOR<BorrowRecordCreateInput, BorrowRecordUncheckedCreateInput>
  }

  /**
   * BorrowRecord createMany
   */
  export type BorrowRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BorrowRecords.
     */
    data: BorrowRecordCreateManyInput | BorrowRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BorrowRecord createManyAndReturn
   */
  export type BorrowRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRecord
     */
    select?: BorrowRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BorrowRecords.
     */
    data: BorrowRecordCreateManyInput | BorrowRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BorrowRecord update
   */
  export type BorrowRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRecord
     */
    select?: BorrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a BorrowRecord.
     */
    data: XOR<BorrowRecordUpdateInput, BorrowRecordUncheckedUpdateInput>
    /**
     * Choose, which BorrowRecord to update.
     */
    where: BorrowRecordWhereUniqueInput
  }

  /**
   * BorrowRecord updateMany
   */
  export type BorrowRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BorrowRecords.
     */
    data: XOR<BorrowRecordUpdateManyMutationInput, BorrowRecordUncheckedUpdateManyInput>
    /**
     * Filter which BorrowRecords to update
     */
    where?: BorrowRecordWhereInput
  }

  /**
   * BorrowRecord upsert
   */
  export type BorrowRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRecord
     */
    select?: BorrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the BorrowRecord to update in case it exists.
     */
    where: BorrowRecordWhereUniqueInput
    /**
     * In case the BorrowRecord found by the `where` argument doesn't exist, create a new BorrowRecord with this data.
     */
    create: XOR<BorrowRecordCreateInput, BorrowRecordUncheckedCreateInput>
    /**
     * In case the BorrowRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BorrowRecordUpdateInput, BorrowRecordUncheckedUpdateInput>
  }

  /**
   * BorrowRecord delete
   */
  export type BorrowRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRecord
     */
    select?: BorrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRecordInclude<ExtArgs> | null
    /**
     * Filter which BorrowRecord to delete.
     */
    where: BorrowRecordWhereUniqueInput
  }

  /**
   * BorrowRecord deleteMany
   */
  export type BorrowRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BorrowRecords to delete
     */
    where?: BorrowRecordWhereInput
  }

  /**
   * BorrowRecord without action
   */
  export type BorrowRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRecord
     */
    select?: BorrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BookScalarFieldEnum: {
    bookId: 'bookId',
    title: 'title',
    genre: 'genre',
    publishedYear: 'publishedYear',
    totalCopies: 'totalCopies',
    availableCopies: 'availableCopies'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    memberId: 'memberId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    membershipDate: 'membershipDate'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const BorrowRecordScalarFieldEnum: {
    borrowId: 'borrowId',
    borrowDate: 'borrowDate',
    returnDate: 'returnDate',
    bookId: 'bookId',
    memberId: 'memberId'
  };

  export type BorrowRecordScalarFieldEnum = (typeof BorrowRecordScalarFieldEnum)[keyof typeof BorrowRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    bookId?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    genre?: StringFilter<"Book"> | string
    publishedYear?: IntFilter<"Book"> | number
    totalCopies?: IntFilter<"Book"> | number
    availableCopies?: IntFilter<"Book"> | number
    BorrowRecord?: BorrowRecordListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    bookId?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    publishedYear?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
    BorrowRecord?: BorrowRecordOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    bookId?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    genre?: StringFilter<"Book"> | string
    publishedYear?: IntFilter<"Book"> | number
    totalCopies?: IntFilter<"Book"> | number
    availableCopies?: IntFilter<"Book"> | number
    BorrowRecord?: BorrowRecordListRelationFilter
  }, "bookId">

  export type BookOrderByWithAggregationInput = {
    bookId?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    publishedYear?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    bookId?: StringWithAggregatesFilter<"Book"> | string
    title?: StringWithAggregatesFilter<"Book"> | string
    genre?: StringWithAggregatesFilter<"Book"> | string
    publishedYear?: IntWithAggregatesFilter<"Book"> | number
    totalCopies?: IntWithAggregatesFilter<"Book"> | number
    availableCopies?: IntWithAggregatesFilter<"Book"> | number
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    memberId?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    email?: StringFilter<"Member"> | string
    phone?: StringFilter<"Member"> | string
    membershipDate?: DateTimeFilter<"Member"> | Date | string
    BorrowRecord?: BorrowRecordListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    memberId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    membershipDate?: SortOrder
    BorrowRecord?: BorrowRecordOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    memberId?: string
    email?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    name?: StringFilter<"Member"> | string
    phone?: StringFilter<"Member"> | string
    membershipDate?: DateTimeFilter<"Member"> | Date | string
    BorrowRecord?: BorrowRecordListRelationFilter
  }, "memberId" | "email">

  export type MemberOrderByWithAggregationInput = {
    memberId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    membershipDate?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    memberId?: StringWithAggregatesFilter<"Member"> | string
    name?: StringWithAggregatesFilter<"Member"> | string
    email?: StringWithAggregatesFilter<"Member"> | string
    phone?: StringWithAggregatesFilter<"Member"> | string
    membershipDate?: DateTimeWithAggregatesFilter<"Member"> | Date | string
  }

  export type BorrowRecordWhereInput = {
    AND?: BorrowRecordWhereInput | BorrowRecordWhereInput[]
    OR?: BorrowRecordWhereInput[]
    NOT?: BorrowRecordWhereInput | BorrowRecordWhereInput[]
    borrowId?: StringFilter<"BorrowRecord"> | string
    borrowDate?: DateTimeFilter<"BorrowRecord"> | Date | string
    returnDate?: DateTimeNullableFilter<"BorrowRecord"> | Date | string | null
    bookId?: StringFilter<"BorrowRecord"> | string
    memberId?: StringFilter<"BorrowRecord"> | string
    book?: XOR<BookRelationFilter, BookWhereInput>
    member?: XOR<MemberRelationFilter, MemberWhereInput>
  }

  export type BorrowRecordOrderByWithRelationInput = {
    borrowId?: SortOrder
    borrowDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    bookId?: SortOrder
    memberId?: SortOrder
    book?: BookOrderByWithRelationInput
    member?: MemberOrderByWithRelationInput
  }

  export type BorrowRecordWhereUniqueInput = Prisma.AtLeast<{
    borrowId?: string
    AND?: BorrowRecordWhereInput | BorrowRecordWhereInput[]
    OR?: BorrowRecordWhereInput[]
    NOT?: BorrowRecordWhereInput | BorrowRecordWhereInput[]
    borrowDate?: DateTimeFilter<"BorrowRecord"> | Date | string
    returnDate?: DateTimeNullableFilter<"BorrowRecord"> | Date | string | null
    bookId?: StringFilter<"BorrowRecord"> | string
    memberId?: StringFilter<"BorrowRecord"> | string
    book?: XOR<BookRelationFilter, BookWhereInput>
    member?: XOR<MemberRelationFilter, MemberWhereInput>
  }, "borrowId">

  export type BorrowRecordOrderByWithAggregationInput = {
    borrowId?: SortOrder
    borrowDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    bookId?: SortOrder
    memberId?: SortOrder
    _count?: BorrowRecordCountOrderByAggregateInput
    _max?: BorrowRecordMaxOrderByAggregateInput
    _min?: BorrowRecordMinOrderByAggregateInput
  }

  export type BorrowRecordScalarWhereWithAggregatesInput = {
    AND?: BorrowRecordScalarWhereWithAggregatesInput | BorrowRecordScalarWhereWithAggregatesInput[]
    OR?: BorrowRecordScalarWhereWithAggregatesInput[]
    NOT?: BorrowRecordScalarWhereWithAggregatesInput | BorrowRecordScalarWhereWithAggregatesInput[]
    borrowId?: StringWithAggregatesFilter<"BorrowRecord"> | string
    borrowDate?: DateTimeWithAggregatesFilter<"BorrowRecord"> | Date | string
    returnDate?: DateTimeNullableWithAggregatesFilter<"BorrowRecord"> | Date | string | null
    bookId?: StringWithAggregatesFilter<"BorrowRecord"> | string
    memberId?: StringWithAggregatesFilter<"BorrowRecord"> | string
  }

  export type BookCreateInput = {
    bookId?: string
    title: string
    genre: string
    publishedYear: number
    totalCopies: number
    availableCopies: number
    BorrowRecord?: BorrowRecordCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    bookId?: string
    title: string
    genre: string
    publishedYear: number
    totalCopies: number
    availableCopies: number
    BorrowRecord?: BorrowRecordUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    publishedYear?: IntFieldUpdateOperationsInput | number
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    BorrowRecord?: BorrowRecordUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    publishedYear?: IntFieldUpdateOperationsInput | number
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    BorrowRecord?: BorrowRecordUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    bookId?: string
    title: string
    genre: string
    publishedYear: number
    totalCopies: number
    availableCopies: number
  }

  export type BookUpdateManyMutationInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    publishedYear?: IntFieldUpdateOperationsInput | number
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
  }

  export type BookUncheckedUpdateManyInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    publishedYear?: IntFieldUpdateOperationsInput | number
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
  }

  export type MemberCreateInput = {
    memberId?: string
    name: string
    email: string
    phone: string
    membershipDate: Date | string
    BorrowRecord?: BorrowRecordCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    memberId?: string
    name: string
    email: string
    phone: string
    membershipDate: Date | string
    BorrowRecord?: BorrowRecordUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membershipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BorrowRecord?: BorrowRecordUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membershipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BorrowRecord?: BorrowRecordUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    memberId?: string
    name: string
    email: string
    phone: string
    membershipDate: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membershipDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membershipDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowRecordCreateInput = {
    borrowId?: string
    borrowDate?: Date | string
    returnDate?: Date | string | null
    book: BookCreateNestedOneWithoutBorrowRecordInput
    member: MemberCreateNestedOneWithoutBorrowRecordInput
  }

  export type BorrowRecordUncheckedCreateInput = {
    borrowId?: string
    borrowDate?: Date | string
    returnDate?: Date | string | null
    bookId: string
    memberId: string
  }

  export type BorrowRecordUpdateInput = {
    borrowId?: StringFieldUpdateOperationsInput | string
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: BookUpdateOneRequiredWithoutBorrowRecordNestedInput
    member?: MemberUpdateOneRequiredWithoutBorrowRecordNestedInput
  }

  export type BorrowRecordUncheckedUpdateInput = {
    borrowId?: StringFieldUpdateOperationsInput | string
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
  }

  export type BorrowRecordCreateManyInput = {
    borrowId?: string
    borrowDate?: Date | string
    returnDate?: Date | string | null
    bookId: string
    memberId: string
  }

  export type BorrowRecordUpdateManyMutationInput = {
    borrowId?: StringFieldUpdateOperationsInput | string
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowRecordUncheckedUpdateManyInput = {
    borrowId?: StringFieldUpdateOperationsInput | string
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BorrowRecordListRelationFilter = {
    every?: BorrowRecordWhereInput
    some?: BorrowRecordWhereInput
    none?: BorrowRecordWhereInput
  }

  export type BorrowRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    bookId?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    publishedYear?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    publishedYear?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    bookId?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    publishedYear?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    bookId?: SortOrder
    title?: SortOrder
    genre?: SortOrder
    publishedYear?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    publishedYear?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MemberCountOrderByAggregateInput = {
    memberId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    membershipDate?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    memberId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    membershipDate?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    memberId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    membershipDate?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BookRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type MemberRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BorrowRecordCountOrderByAggregateInput = {
    borrowId?: SortOrder
    borrowDate?: SortOrder
    returnDate?: SortOrder
    bookId?: SortOrder
    memberId?: SortOrder
  }

  export type BorrowRecordMaxOrderByAggregateInput = {
    borrowId?: SortOrder
    borrowDate?: SortOrder
    returnDate?: SortOrder
    bookId?: SortOrder
    memberId?: SortOrder
  }

  export type BorrowRecordMinOrderByAggregateInput = {
    borrowId?: SortOrder
    borrowDate?: SortOrder
    returnDate?: SortOrder
    bookId?: SortOrder
    memberId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BorrowRecordCreateNestedManyWithoutBookInput = {
    create?: XOR<BorrowRecordCreateWithoutBookInput, BorrowRecordUncheckedCreateWithoutBookInput> | BorrowRecordCreateWithoutBookInput[] | BorrowRecordUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowRecordCreateOrConnectWithoutBookInput | BorrowRecordCreateOrConnectWithoutBookInput[]
    createMany?: BorrowRecordCreateManyBookInputEnvelope
    connect?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
  }

  export type BorrowRecordUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BorrowRecordCreateWithoutBookInput, BorrowRecordUncheckedCreateWithoutBookInput> | BorrowRecordCreateWithoutBookInput[] | BorrowRecordUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowRecordCreateOrConnectWithoutBookInput | BorrowRecordCreateOrConnectWithoutBookInput[]
    createMany?: BorrowRecordCreateManyBookInputEnvelope
    connect?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BorrowRecordUpdateManyWithoutBookNestedInput = {
    create?: XOR<BorrowRecordCreateWithoutBookInput, BorrowRecordUncheckedCreateWithoutBookInput> | BorrowRecordCreateWithoutBookInput[] | BorrowRecordUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowRecordCreateOrConnectWithoutBookInput | BorrowRecordCreateOrConnectWithoutBookInput[]
    upsert?: BorrowRecordUpsertWithWhereUniqueWithoutBookInput | BorrowRecordUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BorrowRecordCreateManyBookInputEnvelope
    set?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    disconnect?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    delete?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    connect?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    update?: BorrowRecordUpdateWithWhereUniqueWithoutBookInput | BorrowRecordUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BorrowRecordUpdateManyWithWhereWithoutBookInput | BorrowRecordUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BorrowRecordScalarWhereInput | BorrowRecordScalarWhereInput[]
  }

  export type BorrowRecordUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BorrowRecordCreateWithoutBookInput, BorrowRecordUncheckedCreateWithoutBookInput> | BorrowRecordCreateWithoutBookInput[] | BorrowRecordUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowRecordCreateOrConnectWithoutBookInput | BorrowRecordCreateOrConnectWithoutBookInput[]
    upsert?: BorrowRecordUpsertWithWhereUniqueWithoutBookInput | BorrowRecordUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BorrowRecordCreateManyBookInputEnvelope
    set?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    disconnect?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    delete?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    connect?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    update?: BorrowRecordUpdateWithWhereUniqueWithoutBookInput | BorrowRecordUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BorrowRecordUpdateManyWithWhereWithoutBookInput | BorrowRecordUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BorrowRecordScalarWhereInput | BorrowRecordScalarWhereInput[]
  }

  export type BorrowRecordCreateNestedManyWithoutMemberInput = {
    create?: XOR<BorrowRecordCreateWithoutMemberInput, BorrowRecordUncheckedCreateWithoutMemberInput> | BorrowRecordCreateWithoutMemberInput[] | BorrowRecordUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: BorrowRecordCreateOrConnectWithoutMemberInput | BorrowRecordCreateOrConnectWithoutMemberInput[]
    createMany?: BorrowRecordCreateManyMemberInputEnvelope
    connect?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
  }

  export type BorrowRecordUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<BorrowRecordCreateWithoutMemberInput, BorrowRecordUncheckedCreateWithoutMemberInput> | BorrowRecordCreateWithoutMemberInput[] | BorrowRecordUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: BorrowRecordCreateOrConnectWithoutMemberInput | BorrowRecordCreateOrConnectWithoutMemberInput[]
    createMany?: BorrowRecordCreateManyMemberInputEnvelope
    connect?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BorrowRecordUpdateManyWithoutMemberNestedInput = {
    create?: XOR<BorrowRecordCreateWithoutMemberInput, BorrowRecordUncheckedCreateWithoutMemberInput> | BorrowRecordCreateWithoutMemberInput[] | BorrowRecordUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: BorrowRecordCreateOrConnectWithoutMemberInput | BorrowRecordCreateOrConnectWithoutMemberInput[]
    upsert?: BorrowRecordUpsertWithWhereUniqueWithoutMemberInput | BorrowRecordUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: BorrowRecordCreateManyMemberInputEnvelope
    set?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    disconnect?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    delete?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    connect?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    update?: BorrowRecordUpdateWithWhereUniqueWithoutMemberInput | BorrowRecordUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: BorrowRecordUpdateManyWithWhereWithoutMemberInput | BorrowRecordUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: BorrowRecordScalarWhereInput | BorrowRecordScalarWhereInput[]
  }

  export type BorrowRecordUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<BorrowRecordCreateWithoutMemberInput, BorrowRecordUncheckedCreateWithoutMemberInput> | BorrowRecordCreateWithoutMemberInput[] | BorrowRecordUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: BorrowRecordCreateOrConnectWithoutMemberInput | BorrowRecordCreateOrConnectWithoutMemberInput[]
    upsert?: BorrowRecordUpsertWithWhereUniqueWithoutMemberInput | BorrowRecordUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: BorrowRecordCreateManyMemberInputEnvelope
    set?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    disconnect?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    delete?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    connect?: BorrowRecordWhereUniqueInput | BorrowRecordWhereUniqueInput[]
    update?: BorrowRecordUpdateWithWhereUniqueWithoutMemberInput | BorrowRecordUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: BorrowRecordUpdateManyWithWhereWithoutMemberInput | BorrowRecordUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: BorrowRecordScalarWhereInput | BorrowRecordScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutBorrowRecordInput = {
    create?: XOR<BookCreateWithoutBorrowRecordInput, BookUncheckedCreateWithoutBorrowRecordInput>
    connectOrCreate?: BookCreateOrConnectWithoutBorrowRecordInput
    connect?: BookWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutBorrowRecordInput = {
    create?: XOR<MemberCreateWithoutBorrowRecordInput, MemberUncheckedCreateWithoutBorrowRecordInput>
    connectOrCreate?: MemberCreateOrConnectWithoutBorrowRecordInput
    connect?: MemberWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BookUpdateOneRequiredWithoutBorrowRecordNestedInput = {
    create?: XOR<BookCreateWithoutBorrowRecordInput, BookUncheckedCreateWithoutBorrowRecordInput>
    connectOrCreate?: BookCreateOrConnectWithoutBorrowRecordInput
    upsert?: BookUpsertWithoutBorrowRecordInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutBorrowRecordInput, BookUpdateWithoutBorrowRecordInput>, BookUncheckedUpdateWithoutBorrowRecordInput>
  }

  export type MemberUpdateOneRequiredWithoutBorrowRecordNestedInput = {
    create?: XOR<MemberCreateWithoutBorrowRecordInput, MemberUncheckedCreateWithoutBorrowRecordInput>
    connectOrCreate?: MemberCreateOrConnectWithoutBorrowRecordInput
    upsert?: MemberUpsertWithoutBorrowRecordInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutBorrowRecordInput, MemberUpdateWithoutBorrowRecordInput>, MemberUncheckedUpdateWithoutBorrowRecordInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BorrowRecordCreateWithoutBookInput = {
    borrowId?: string
    borrowDate?: Date | string
    returnDate?: Date | string | null
    member: MemberCreateNestedOneWithoutBorrowRecordInput
  }

  export type BorrowRecordUncheckedCreateWithoutBookInput = {
    borrowId?: string
    borrowDate?: Date | string
    returnDate?: Date | string | null
    memberId: string
  }

  export type BorrowRecordCreateOrConnectWithoutBookInput = {
    where: BorrowRecordWhereUniqueInput
    create: XOR<BorrowRecordCreateWithoutBookInput, BorrowRecordUncheckedCreateWithoutBookInput>
  }

  export type BorrowRecordCreateManyBookInputEnvelope = {
    data: BorrowRecordCreateManyBookInput | BorrowRecordCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BorrowRecordUpsertWithWhereUniqueWithoutBookInput = {
    where: BorrowRecordWhereUniqueInput
    update: XOR<BorrowRecordUpdateWithoutBookInput, BorrowRecordUncheckedUpdateWithoutBookInput>
    create: XOR<BorrowRecordCreateWithoutBookInput, BorrowRecordUncheckedCreateWithoutBookInput>
  }

  export type BorrowRecordUpdateWithWhereUniqueWithoutBookInput = {
    where: BorrowRecordWhereUniqueInput
    data: XOR<BorrowRecordUpdateWithoutBookInput, BorrowRecordUncheckedUpdateWithoutBookInput>
  }

  export type BorrowRecordUpdateManyWithWhereWithoutBookInput = {
    where: BorrowRecordScalarWhereInput
    data: XOR<BorrowRecordUpdateManyMutationInput, BorrowRecordUncheckedUpdateManyWithoutBookInput>
  }

  export type BorrowRecordScalarWhereInput = {
    AND?: BorrowRecordScalarWhereInput | BorrowRecordScalarWhereInput[]
    OR?: BorrowRecordScalarWhereInput[]
    NOT?: BorrowRecordScalarWhereInput | BorrowRecordScalarWhereInput[]
    borrowId?: StringFilter<"BorrowRecord"> | string
    borrowDate?: DateTimeFilter<"BorrowRecord"> | Date | string
    returnDate?: DateTimeNullableFilter<"BorrowRecord"> | Date | string | null
    bookId?: StringFilter<"BorrowRecord"> | string
    memberId?: StringFilter<"BorrowRecord"> | string
  }

  export type BorrowRecordCreateWithoutMemberInput = {
    borrowId?: string
    borrowDate?: Date | string
    returnDate?: Date | string | null
    book: BookCreateNestedOneWithoutBorrowRecordInput
  }

  export type BorrowRecordUncheckedCreateWithoutMemberInput = {
    borrowId?: string
    borrowDate?: Date | string
    returnDate?: Date | string | null
    bookId: string
  }

  export type BorrowRecordCreateOrConnectWithoutMemberInput = {
    where: BorrowRecordWhereUniqueInput
    create: XOR<BorrowRecordCreateWithoutMemberInput, BorrowRecordUncheckedCreateWithoutMemberInput>
  }

  export type BorrowRecordCreateManyMemberInputEnvelope = {
    data: BorrowRecordCreateManyMemberInput | BorrowRecordCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type BorrowRecordUpsertWithWhereUniqueWithoutMemberInput = {
    where: BorrowRecordWhereUniqueInput
    update: XOR<BorrowRecordUpdateWithoutMemberInput, BorrowRecordUncheckedUpdateWithoutMemberInput>
    create: XOR<BorrowRecordCreateWithoutMemberInput, BorrowRecordUncheckedCreateWithoutMemberInput>
  }

  export type BorrowRecordUpdateWithWhereUniqueWithoutMemberInput = {
    where: BorrowRecordWhereUniqueInput
    data: XOR<BorrowRecordUpdateWithoutMemberInput, BorrowRecordUncheckedUpdateWithoutMemberInput>
  }

  export type BorrowRecordUpdateManyWithWhereWithoutMemberInput = {
    where: BorrowRecordScalarWhereInput
    data: XOR<BorrowRecordUpdateManyMutationInput, BorrowRecordUncheckedUpdateManyWithoutMemberInput>
  }

  export type BookCreateWithoutBorrowRecordInput = {
    bookId?: string
    title: string
    genre: string
    publishedYear: number
    totalCopies: number
    availableCopies: number
  }

  export type BookUncheckedCreateWithoutBorrowRecordInput = {
    bookId?: string
    title: string
    genre: string
    publishedYear: number
    totalCopies: number
    availableCopies: number
  }

  export type BookCreateOrConnectWithoutBorrowRecordInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutBorrowRecordInput, BookUncheckedCreateWithoutBorrowRecordInput>
  }

  export type MemberCreateWithoutBorrowRecordInput = {
    memberId?: string
    name: string
    email: string
    phone: string
    membershipDate: Date | string
  }

  export type MemberUncheckedCreateWithoutBorrowRecordInput = {
    memberId?: string
    name: string
    email: string
    phone: string
    membershipDate: Date | string
  }

  export type MemberCreateOrConnectWithoutBorrowRecordInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutBorrowRecordInput, MemberUncheckedCreateWithoutBorrowRecordInput>
  }

  export type BookUpsertWithoutBorrowRecordInput = {
    update: XOR<BookUpdateWithoutBorrowRecordInput, BookUncheckedUpdateWithoutBorrowRecordInput>
    create: XOR<BookCreateWithoutBorrowRecordInput, BookUncheckedCreateWithoutBorrowRecordInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutBorrowRecordInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutBorrowRecordInput, BookUncheckedUpdateWithoutBorrowRecordInput>
  }

  export type BookUpdateWithoutBorrowRecordInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    publishedYear?: IntFieldUpdateOperationsInput | number
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
  }

  export type BookUncheckedUpdateWithoutBorrowRecordInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    publishedYear?: IntFieldUpdateOperationsInput | number
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
  }

  export type MemberUpsertWithoutBorrowRecordInput = {
    update: XOR<MemberUpdateWithoutBorrowRecordInput, MemberUncheckedUpdateWithoutBorrowRecordInput>
    create: XOR<MemberCreateWithoutBorrowRecordInput, MemberUncheckedCreateWithoutBorrowRecordInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutBorrowRecordInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutBorrowRecordInput, MemberUncheckedUpdateWithoutBorrowRecordInput>
  }

  export type MemberUpdateWithoutBorrowRecordInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membershipDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateWithoutBorrowRecordInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    membershipDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowRecordCreateManyBookInput = {
    borrowId?: string
    borrowDate?: Date | string
    returnDate?: Date | string | null
    memberId: string
  }

  export type BorrowRecordUpdateWithoutBookInput = {
    borrowId?: StringFieldUpdateOperationsInput | string
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: MemberUpdateOneRequiredWithoutBorrowRecordNestedInput
  }

  export type BorrowRecordUncheckedUpdateWithoutBookInput = {
    borrowId?: StringFieldUpdateOperationsInput | string
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memberId?: StringFieldUpdateOperationsInput | string
  }

  export type BorrowRecordUncheckedUpdateManyWithoutBookInput = {
    borrowId?: StringFieldUpdateOperationsInput | string
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memberId?: StringFieldUpdateOperationsInput | string
  }

  export type BorrowRecordCreateManyMemberInput = {
    borrowId?: string
    borrowDate?: Date | string
    returnDate?: Date | string | null
    bookId: string
  }

  export type BorrowRecordUpdateWithoutMemberInput = {
    borrowId?: StringFieldUpdateOperationsInput | string
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: BookUpdateOneRequiredWithoutBorrowRecordNestedInput
  }

  export type BorrowRecordUncheckedUpdateWithoutMemberInput = {
    borrowId?: StringFieldUpdateOperationsInput | string
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type BorrowRecordUncheckedUpdateManyWithoutMemberInput = {
    borrowId?: StringFieldUpdateOperationsInput | string
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BookCountOutputTypeDefaultArgs instead
     */
    export type BookCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemberCountOutputTypeDefaultArgs instead
     */
    export type MemberCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemberCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookDefaultArgs instead
     */
    export type BookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemberDefaultArgs instead
     */
    export type MemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BorrowRecordDefaultArgs instead
     */
    export type BorrowRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BorrowRecordDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}