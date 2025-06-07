
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model Email
 * 
 */
export type Email = $Result.DefaultSelection<Prisma.$EmailPayload>
/**
 * Model ExternalLinks
 * 
 */
export type ExternalLinks = $Result.DefaultSelection<Prisma.$ExternalLinksPayload>
/**
 * Model Articles
 * 
 */
export type Articles = $Result.DefaultSelection<Prisma.$ArticlesPayload>
/**
 * Model InstitutionInstance
 * 
 */
export type InstitutionInstance = $Result.DefaultSelection<Prisma.$InstitutionInstancePayload>
/**
 * Model InstitutionInstanceModule
 * 
 */
export type InstitutionInstanceModule = $Result.DefaultSelection<Prisma.$InstitutionInstanceModulePayload>
/**
 * Model InstitutionInstanceModuleType
 * 
 */
export type InstitutionInstanceModuleType = $Result.DefaultSelection<Prisma.$InstitutionInstanceModuleTypePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ExternalLinkScope: {
  INSTITUTION: 'INSTITUTION',
  GROUP: 'GROUP',
  STUDENT: 'STUDENT'
};

export type ExternalLinkScope = (typeof ExternalLinkScope)[keyof typeof ExternalLinkScope]

}

export type ExternalLinkScope = $Enums.ExternalLinkScope

export const ExternalLinkScope: typeof $Enums.ExternalLinkScope

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.email`: Exposes CRUD operations for the **Email** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emails
    * const emails = await prisma.email.findMany()
    * ```
    */
  get email(): Prisma.EmailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.externalLinks`: Exposes CRUD operations for the **ExternalLinks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExternalLinks
    * const externalLinks = await prisma.externalLinks.findMany()
    * ```
    */
  get externalLinks(): Prisma.ExternalLinksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articles`: Exposes CRUD operations for the **Articles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.articles.findMany()
    * ```
    */
  get articles(): Prisma.ArticlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.institutionInstance`: Exposes CRUD operations for the **InstitutionInstance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstitutionInstances
    * const institutionInstances = await prisma.institutionInstance.findMany()
    * ```
    */
  get institutionInstance(): Prisma.InstitutionInstanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.institutionInstanceModule`: Exposes CRUD operations for the **InstitutionInstanceModule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstitutionInstanceModules
    * const institutionInstanceModules = await prisma.institutionInstanceModule.findMany()
    * ```
    */
  get institutionInstanceModule(): Prisma.InstitutionInstanceModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.institutionInstanceModuleType`: Exposes CRUD operations for the **InstitutionInstanceModuleType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstitutionInstanceModuleTypes
    * const institutionInstanceModuleTypes = await prisma.institutionInstanceModuleType.findMany()
    * ```
    */
  get institutionInstanceModuleType(): Prisma.InstitutionInstanceModuleTypeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Role: 'Role',
    Permission: 'Permission',
    Email: 'Email',
    ExternalLinks: 'ExternalLinks',
    Articles: 'Articles',
    InstitutionInstance: 'InstitutionInstance',
    InstitutionInstanceModule: 'InstitutionInstanceModule',
    InstitutionInstanceModuleType: 'InstitutionInstanceModuleType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "permission" | "email" | "externalLinks" | "articles" | "institutionInstance" | "institutionInstanceModule" | "institutionInstanceModuleType"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      Email: {
        payload: Prisma.$EmailPayload<ExtArgs>
        fields: Prisma.EmailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findFirst: {
            args: Prisma.EmailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findMany: {
            args: Prisma.EmailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          create: {
            args: Prisma.EmailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          createMany: {
            args: Prisma.EmailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          delete: {
            args: Prisma.EmailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          update: {
            args: Prisma.EmailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          deleteMany: {
            args: Prisma.EmailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          upsert: {
            args: Prisma.EmailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          aggregate: {
            args: Prisma.EmailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail>
          }
          groupBy: {
            args: Prisma.EmailGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailCountArgs<ExtArgs>
            result: $Utils.Optional<EmailCountAggregateOutputType> | number
          }
        }
      }
      ExternalLinks: {
        payload: Prisma.$ExternalLinksPayload<ExtArgs>
        fields: Prisma.ExternalLinksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExternalLinksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalLinksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExternalLinksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalLinksPayload>
          }
          findFirst: {
            args: Prisma.ExternalLinksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalLinksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExternalLinksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalLinksPayload>
          }
          findMany: {
            args: Prisma.ExternalLinksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalLinksPayload>[]
          }
          create: {
            args: Prisma.ExternalLinksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalLinksPayload>
          }
          createMany: {
            args: Prisma.ExternalLinksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExternalLinksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalLinksPayload>[]
          }
          delete: {
            args: Prisma.ExternalLinksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalLinksPayload>
          }
          update: {
            args: Prisma.ExternalLinksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalLinksPayload>
          }
          deleteMany: {
            args: Prisma.ExternalLinksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExternalLinksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExternalLinksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalLinksPayload>[]
          }
          upsert: {
            args: Prisma.ExternalLinksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalLinksPayload>
          }
          aggregate: {
            args: Prisma.ExternalLinksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExternalLinks>
          }
          groupBy: {
            args: Prisma.ExternalLinksGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExternalLinksGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExternalLinksCountArgs<ExtArgs>
            result: $Utils.Optional<ExternalLinksCountAggregateOutputType> | number
          }
        }
      }
      Articles: {
        payload: Prisma.$ArticlesPayload<ExtArgs>
        fields: Prisma.ArticlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          findFirst: {
            args: Prisma.ArticlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          findMany: {
            args: Prisma.ArticlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>[]
          }
          create: {
            args: Prisma.ArticlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          createMany: {
            args: Prisma.ArticlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticlesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>[]
          }
          delete: {
            args: Prisma.ArticlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          update: {
            args: Prisma.ArticlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          deleteMany: {
            args: Prisma.ArticlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticlesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>[]
          }
          upsert: {
            args: Prisma.ArticlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          aggregate: {
            args: Prisma.ArticlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticles>
          }
          groupBy: {
            args: Prisma.ArticlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticlesCountArgs<ExtArgs>
            result: $Utils.Optional<ArticlesCountAggregateOutputType> | number
          }
        }
      }
      InstitutionInstance: {
        payload: Prisma.$InstitutionInstancePayload<ExtArgs>
        fields: Prisma.InstitutionInstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstitutionInstanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstitutionInstanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstancePayload>
          }
          findFirst: {
            args: Prisma.InstitutionInstanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstitutionInstanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstancePayload>
          }
          findMany: {
            args: Prisma.InstitutionInstanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstancePayload>[]
          }
          create: {
            args: Prisma.InstitutionInstanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstancePayload>
          }
          createMany: {
            args: Prisma.InstitutionInstanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstitutionInstanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstancePayload>[]
          }
          delete: {
            args: Prisma.InstitutionInstanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstancePayload>
          }
          update: {
            args: Prisma.InstitutionInstanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstancePayload>
          }
          deleteMany: {
            args: Prisma.InstitutionInstanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstitutionInstanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstitutionInstanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstancePayload>[]
          }
          upsert: {
            args: Prisma.InstitutionInstanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstancePayload>
          }
          aggregate: {
            args: Prisma.InstitutionInstanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstitutionInstance>
          }
          groupBy: {
            args: Prisma.InstitutionInstanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstitutionInstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstitutionInstanceCountArgs<ExtArgs>
            result: $Utils.Optional<InstitutionInstanceCountAggregateOutputType> | number
          }
        }
      }
      InstitutionInstanceModule: {
        payload: Prisma.$InstitutionInstanceModulePayload<ExtArgs>
        fields: Prisma.InstitutionInstanceModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstitutionInstanceModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstitutionInstanceModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModulePayload>
          }
          findFirst: {
            args: Prisma.InstitutionInstanceModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstitutionInstanceModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModulePayload>
          }
          findMany: {
            args: Prisma.InstitutionInstanceModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModulePayload>[]
          }
          create: {
            args: Prisma.InstitutionInstanceModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModulePayload>
          }
          createMany: {
            args: Prisma.InstitutionInstanceModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstitutionInstanceModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModulePayload>[]
          }
          delete: {
            args: Prisma.InstitutionInstanceModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModulePayload>
          }
          update: {
            args: Prisma.InstitutionInstanceModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModulePayload>
          }
          deleteMany: {
            args: Prisma.InstitutionInstanceModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstitutionInstanceModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstitutionInstanceModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModulePayload>[]
          }
          upsert: {
            args: Prisma.InstitutionInstanceModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModulePayload>
          }
          aggregate: {
            args: Prisma.InstitutionInstanceModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstitutionInstanceModule>
          }
          groupBy: {
            args: Prisma.InstitutionInstanceModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstitutionInstanceModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstitutionInstanceModuleCountArgs<ExtArgs>
            result: $Utils.Optional<InstitutionInstanceModuleCountAggregateOutputType> | number
          }
        }
      }
      InstitutionInstanceModuleType: {
        payload: Prisma.$InstitutionInstanceModuleTypePayload<ExtArgs>
        fields: Prisma.InstitutionInstanceModuleTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstitutionInstanceModuleTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModuleTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstitutionInstanceModuleTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModuleTypePayload>
          }
          findFirst: {
            args: Prisma.InstitutionInstanceModuleTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModuleTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstitutionInstanceModuleTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModuleTypePayload>
          }
          findMany: {
            args: Prisma.InstitutionInstanceModuleTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModuleTypePayload>[]
          }
          create: {
            args: Prisma.InstitutionInstanceModuleTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModuleTypePayload>
          }
          createMany: {
            args: Prisma.InstitutionInstanceModuleTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstitutionInstanceModuleTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModuleTypePayload>[]
          }
          delete: {
            args: Prisma.InstitutionInstanceModuleTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModuleTypePayload>
          }
          update: {
            args: Prisma.InstitutionInstanceModuleTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModuleTypePayload>
          }
          deleteMany: {
            args: Prisma.InstitutionInstanceModuleTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstitutionInstanceModuleTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstitutionInstanceModuleTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModuleTypePayload>[]
          }
          upsert: {
            args: Prisma.InstitutionInstanceModuleTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionInstanceModuleTypePayload>
          }
          aggregate: {
            args: Prisma.InstitutionInstanceModuleTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstitutionInstanceModuleType>
          }
          groupBy: {
            args: Prisma.InstitutionInstanceModuleTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstitutionInstanceModuleTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstitutionInstanceModuleTypeCountArgs<ExtArgs>
            result: $Utils.Optional<InstitutionInstanceModuleTypeCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    permission?: PermissionOmit
    email?: EmailOmit
    externalLinks?: ExternalLinksOmit
    articles?: ArticlesOmit
    institutionInstance?: InstitutionInstanceOmit
    institutionInstanceModule?: InstitutionInstanceModuleOmit
    institutionInstanceModuleType?: InstitutionInstanceModuleTypeOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    emails: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | UserCountOutputTypeCountEmailsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    User: number
    permissions: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | RoleCountOutputTypeCountUserArgs
    permissions?: boolean | RoleCountOutputTypeCountPermissionsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    roles: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | PermissionCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }


  /**
   * Count Type InstitutionInstanceCountOutputType
   */

  export type InstitutionInstanceCountOutputType = {
    modules: number
    User: number
    externalLinks: number
  }

  export type InstitutionInstanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | InstitutionInstanceCountOutputTypeCountModulesArgs
    User?: boolean | InstitutionInstanceCountOutputTypeCountUserArgs
    externalLinks?: boolean | InstitutionInstanceCountOutputTypeCountExternalLinksArgs
  }

  // Custom InputTypes
  /**
   * InstitutionInstanceCountOutputType without action
   */
  export type InstitutionInstanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceCountOutputType
     */
    select?: InstitutionInstanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstitutionInstanceCountOutputType without action
   */
  export type InstitutionInstanceCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionInstanceModuleWhereInput
  }

  /**
   * InstitutionInstanceCountOutputType without action
   */
  export type InstitutionInstanceCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * InstitutionInstanceCountOutputType without action
   */
  export type InstitutionInstanceCountOutputTypeCountExternalLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalLinksWhereInput
  }


  /**
   * Count Type InstitutionInstanceModuleTypeCountOutputType
   */

  export type InstitutionInstanceModuleTypeCountOutputType = {
    InstitutionInstanceModule: number
  }

  export type InstitutionInstanceModuleTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InstitutionInstanceModule?: boolean | InstitutionInstanceModuleTypeCountOutputTypeCountInstitutionInstanceModuleArgs
  }

  // Custom InputTypes
  /**
   * InstitutionInstanceModuleTypeCountOutputType without action
   */
  export type InstitutionInstanceModuleTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModuleTypeCountOutputType
     */
    select?: InstitutionInstanceModuleTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstitutionInstanceModuleTypeCountOutputType without action
   */
  export type InstitutionInstanceModuleTypeCountOutputTypeCountInstitutionInstanceModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionInstanceModuleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    passwordHash: string | null
    roleId: string | null
    instanceId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    passwordHash: string | null
    roleId: string | null
    instanceId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    passwordHash: number
    roleId: number
    instanceId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    passwordHash?: true
    roleId?: true
    instanceId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    passwordHash?: true
    roleId?: true
    instanceId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    passwordHash?: true
    roleId?: true
    instanceId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    passwordHash: string
    roleId: string
    instanceId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    passwordHash?: boolean
    roleId?: boolean
    instanceId?: boolean
    emails?: boolean | User$emailsArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    instance?: boolean | User$instanceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    passwordHash?: boolean
    roleId?: boolean
    instanceId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    instance?: boolean | User$instanceArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    passwordHash?: boolean
    roleId?: boolean
    instanceId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    instance?: boolean | User$instanceArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    passwordHash?: boolean
    roleId?: boolean
    instanceId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "passwordHash" | "roleId" | "instanceId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | User$emailsArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    instance?: boolean | User$instanceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    instance?: boolean | User$instanceArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    instance?: boolean | User$instanceArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      emails: Prisma.$EmailPayload<ExtArgs>[]
      role: Prisma.$RolePayload<ExtArgs>
      instance: Prisma.$InstitutionInstancePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      passwordHash: string
      roleId: string
      instanceId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emails<T extends User$emailsArgs<ExtArgs> = {}>(args?: Subset<T, User$emailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instance<T extends User$instanceArgs<ExtArgs> = {}>(args?: Subset<T, User$instanceArgs<ExtArgs>>): Prisma__InstitutionInstanceClient<$Result.GetResult<Prisma.$InstitutionInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly instanceId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.emails
   */
  export type User$emailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    cursor?: EmailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * User.instance
   */
  export type User$instanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstance
     */
    select?: InstitutionInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstance
     */
    omit?: InstitutionInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceInclude<ExtArgs> | null
    where?: InstitutionInstanceWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    description: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    User?: boolean | Role$UserArgs<ExtArgs>
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Role$UserArgs<ExtArgs>
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Role$UserArgs<ExtArgs> = {}>(args?: Subset<T, Role$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissions<T extends Role$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.User
   */
  export type Role$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role.permissions
   */
  export type Role$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type PermissionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: string
    name: string
    description: string
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      roles: Prisma.$RolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
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
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Permission$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permission$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'String'>
    readonly name: FieldRef<"Permission", 'String'>
    readonly description: FieldRef<"Permission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission.roles
   */
  export type Permission$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model Email
   */

  export type AggregateEmail = {
    _count: EmailCountAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  export type EmailMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type EmailMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type EmailCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type EmailMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type EmailMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type EmailCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type EmailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Email to aggregate.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emails
    **/
    _count?: true | EmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailMaxAggregateInputType
  }

  export type GetEmailAggregateType<T extends EmailAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail[P]>
      : GetScalarType<T[P], AggregateEmail[P]>
  }




  export type EmailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithAggregationInput | EmailOrderByWithAggregationInput[]
    by: EmailScalarFieldEnum[] | EmailScalarFieldEnum
    having?: EmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailCountAggregateInputType | true
    _min?: EmailMinAggregateInputType
    _max?: EmailMaxAggregateInputType
  }

  export type EmailGroupByOutputType = {
    id: string
    email: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: EmailCountAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  type GetEmailGroupByPayload<T extends EmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailGroupByOutputType[P]>
            : GetScalarType<T[P], EmailGroupByOutputType[P]>
        }
      >
    >


  export type EmailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type EmailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["email"]>
  export type EmailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Email"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["email"]>
    composites: {}
  }

  type EmailGetPayload<S extends boolean | null | undefined | EmailDefaultArgs> = $Result.GetResult<Prisma.$EmailPayload, S>

  type EmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailCountAggregateInputType | true
    }

  export interface EmailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Email'], meta: { name: 'Email' } }
    /**
     * Find zero or one Email that matches the filter.
     * @param {EmailFindUniqueArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailFindUniqueArgs>(args: SelectSubset<T, EmailFindUniqueArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailFindUniqueOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailFindFirstArgs>(args?: SelectSubset<T, EmailFindFirstArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emails
     * const emails = await prisma.email.findMany()
     * 
     * // Get first 10 Emails
     * const emails = await prisma.email.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailWithIdOnly = await prisma.email.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailFindManyArgs>(args?: SelectSubset<T, EmailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email.
     * @param {EmailCreateArgs} args - Arguments to create a Email.
     * @example
     * // Create one Email
     * const Email = await prisma.email.create({
     *   data: {
     *     // ... data to create a Email
     *   }
     * })
     * 
     */
    create<T extends EmailCreateArgs>(args: SelectSubset<T, EmailCreateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emails.
     * @param {EmailCreateManyArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const email = await prisma.email.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailCreateManyArgs>(args?: SelectSubset<T, EmailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emails and returns the data saved in the database.
     * @param {EmailCreateManyAndReturnArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const email = await prisma.email.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emails and only return the `id`
     * const emailWithIdOnly = await prisma.email.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Email.
     * @param {EmailDeleteArgs} args - Arguments to delete one Email.
     * @example
     * // Delete one Email
     * const Email = await prisma.email.delete({
     *   where: {
     *     // ... filter to delete one Email
     *   }
     * })
     * 
     */
    delete<T extends EmailDeleteArgs>(args: SelectSubset<T, EmailDeleteArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email.
     * @param {EmailUpdateArgs} args - Arguments to update one Email.
     * @example
     * // Update one Email
     * const email = await prisma.email.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailUpdateArgs>(args: SelectSubset<T, EmailUpdateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emails.
     * @param {EmailDeleteManyArgs} args - Arguments to filter Emails to delete.
     * @example
     * // Delete a few Emails
     * const { count } = await prisma.email.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailDeleteManyArgs>(args?: SelectSubset<T, EmailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailUpdateManyArgs>(args: SelectSubset<T, EmailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails and returns the data updated in the database.
     * @param {EmailUpdateManyAndReturnArgs} args - Arguments to update many Emails.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emails and only return the `id`
     * const emailWithIdOnly = await prisma.email.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Email.
     * @param {EmailUpsertArgs} args - Arguments to update or create a Email.
     * @example
     * // Update or create a Email
     * const email = await prisma.email.upsert({
     *   create: {
     *     // ... data to create a Email
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email we want to update
     *   }
     * })
     */
    upsert<T extends EmailUpsertArgs>(args: SelectSubset<T, EmailUpsertArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCountArgs} args - Arguments to filter Emails to count.
     * @example
     * // Count the number of Emails
     * const count = await prisma.email.count({
     *   where: {
     *     // ... the filter for the Emails we want to count
     *   }
     * })
    **/
    count<T extends EmailCountArgs>(
      args?: Subset<T, EmailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailAggregateArgs>(args: Subset<T, EmailAggregateArgs>): Prisma.PrismaPromise<GetEmailAggregateType<T>>

    /**
     * Group by Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailGroupByArgs} args - Group by arguments.
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
      T extends EmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailGroupByArgs['orderBy'] }
        : { orderBy?: EmailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Email model
   */
  readonly fields: EmailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Email.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Email model
   */
  interface EmailFieldRefs {
    readonly id: FieldRef<"Email", 'String'>
    readonly email: FieldRef<"Email", 'String'>
    readonly createdAt: FieldRef<"Email", 'DateTime'>
    readonly updatedAt: FieldRef<"Email", 'DateTime'>
    readonly userId: FieldRef<"Email", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Email findUnique
   */
  export type EmailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email findUniqueOrThrow
   */
  export type EmailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email findFirst
   */
  export type EmailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email findFirstOrThrow
   */
  export type EmailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email findMany
   */
  export type EmailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Emails to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email create
   */
  export type EmailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to create a Email.
     */
    data: XOR<EmailCreateInput, EmailUncheckedCreateInput>
  }

  /**
   * Email createMany
   */
  export type EmailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emails.
     */
    data: EmailCreateManyInput | EmailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Email createManyAndReturn
   */
  export type EmailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * The data used to create many Emails.
     */
    data: EmailCreateManyInput | EmailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Email update
   */
  export type EmailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to update a Email.
     */
    data: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
    /**
     * Choose, which Email to update.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email updateMany
   */
  export type EmailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
  }

  /**
   * Email updateManyAndReturn
   */
  export type EmailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Email upsert
   */
  export type EmailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The filter to search for the Email to update in case it exists.
     */
    where: EmailWhereUniqueInput
    /**
     * In case the Email found by the `where` argument doesn't exist, create a new Email with this data.
     */
    create: XOR<EmailCreateInput, EmailUncheckedCreateInput>
    /**
     * In case the Email was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
  }

  /**
   * Email delete
   */
  export type EmailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter which Email to delete.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email deleteMany
   */
  export type EmailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emails to delete
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to delete.
     */
    limit?: number
  }

  /**
   * Email without action
   */
  export type EmailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
  }


  /**
   * Model ExternalLinks
   */

  export type AggregateExternalLinks = {
    _count: ExternalLinksCountAggregateOutputType | null
    _min: ExternalLinksMinAggregateOutputType | null
    _max: ExternalLinksMaxAggregateOutputType | null
  }

  export type ExternalLinksMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
    name: string | null
    emoji: string | null
    scope: $Enums.ExternalLinkScope | null
    institutionInstanceId: string | null
  }

  export type ExternalLinksMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
    name: string | null
    emoji: string | null
    scope: $Enums.ExternalLinkScope | null
    institutionInstanceId: string | null
  }

  export type ExternalLinksCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    url: number
    name: number
    emoji: number
    scope: number
    institutionInstanceId: number
    _all: number
  }


  export type ExternalLinksMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    name?: true
    emoji?: true
    scope?: true
    institutionInstanceId?: true
  }

  export type ExternalLinksMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    name?: true
    emoji?: true
    scope?: true
    institutionInstanceId?: true
  }

  export type ExternalLinksCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    name?: true
    emoji?: true
    scope?: true
    institutionInstanceId?: true
    _all?: true
  }

  export type ExternalLinksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalLinks to aggregate.
     */
    where?: ExternalLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalLinks to fetch.
     */
    orderBy?: ExternalLinksOrderByWithRelationInput | ExternalLinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExternalLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExternalLinks
    **/
    _count?: true | ExternalLinksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExternalLinksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExternalLinksMaxAggregateInputType
  }

  export type GetExternalLinksAggregateType<T extends ExternalLinksAggregateArgs> = {
        [P in keyof T & keyof AggregateExternalLinks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExternalLinks[P]>
      : GetScalarType<T[P], AggregateExternalLinks[P]>
  }




  export type ExternalLinksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalLinksWhereInput
    orderBy?: ExternalLinksOrderByWithAggregationInput | ExternalLinksOrderByWithAggregationInput[]
    by: ExternalLinksScalarFieldEnum[] | ExternalLinksScalarFieldEnum
    having?: ExternalLinksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExternalLinksCountAggregateInputType | true
    _min?: ExternalLinksMinAggregateInputType
    _max?: ExternalLinksMaxAggregateInputType
  }

  export type ExternalLinksGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    url: string
    name: string
    emoji: string
    scope: $Enums.ExternalLinkScope
    institutionInstanceId: string | null
    _count: ExternalLinksCountAggregateOutputType | null
    _min: ExternalLinksMinAggregateOutputType | null
    _max: ExternalLinksMaxAggregateOutputType | null
  }

  type GetExternalLinksGroupByPayload<T extends ExternalLinksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExternalLinksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExternalLinksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExternalLinksGroupByOutputType[P]>
            : GetScalarType<T[P], ExternalLinksGroupByOutputType[P]>
        }
      >
    >


  export type ExternalLinksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    name?: boolean
    emoji?: boolean
    scope?: boolean
    institutionInstanceId?: boolean
    institutionInstance?: boolean | ExternalLinks$institutionInstanceArgs<ExtArgs>
  }, ExtArgs["result"]["externalLinks"]>

  export type ExternalLinksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    name?: boolean
    emoji?: boolean
    scope?: boolean
    institutionInstanceId?: boolean
    institutionInstance?: boolean | ExternalLinks$institutionInstanceArgs<ExtArgs>
  }, ExtArgs["result"]["externalLinks"]>

  export type ExternalLinksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    name?: boolean
    emoji?: boolean
    scope?: boolean
    institutionInstanceId?: boolean
    institutionInstance?: boolean | ExternalLinks$institutionInstanceArgs<ExtArgs>
  }, ExtArgs["result"]["externalLinks"]>

  export type ExternalLinksSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    name?: boolean
    emoji?: boolean
    scope?: boolean
    institutionInstanceId?: boolean
  }

  export type ExternalLinksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "url" | "name" | "emoji" | "scope" | "institutionInstanceId", ExtArgs["result"]["externalLinks"]>
  export type ExternalLinksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institutionInstance?: boolean | ExternalLinks$institutionInstanceArgs<ExtArgs>
  }
  export type ExternalLinksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institutionInstance?: boolean | ExternalLinks$institutionInstanceArgs<ExtArgs>
  }
  export type ExternalLinksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institutionInstance?: boolean | ExternalLinks$institutionInstanceArgs<ExtArgs>
  }

  export type $ExternalLinksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExternalLinks"
    objects: {
      institutionInstance: Prisma.$InstitutionInstancePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      url: string
      name: string
      emoji: string
      scope: $Enums.ExternalLinkScope
      institutionInstanceId: string | null
    }, ExtArgs["result"]["externalLinks"]>
    composites: {}
  }

  type ExternalLinksGetPayload<S extends boolean | null | undefined | ExternalLinksDefaultArgs> = $Result.GetResult<Prisma.$ExternalLinksPayload, S>

  type ExternalLinksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExternalLinksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExternalLinksCountAggregateInputType | true
    }

  export interface ExternalLinksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExternalLinks'], meta: { name: 'ExternalLinks' } }
    /**
     * Find zero or one ExternalLinks that matches the filter.
     * @param {ExternalLinksFindUniqueArgs} args - Arguments to find a ExternalLinks
     * @example
     * // Get one ExternalLinks
     * const externalLinks = await prisma.externalLinks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExternalLinksFindUniqueArgs>(args: SelectSubset<T, ExternalLinksFindUniqueArgs<ExtArgs>>): Prisma__ExternalLinksClient<$Result.GetResult<Prisma.$ExternalLinksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExternalLinks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExternalLinksFindUniqueOrThrowArgs} args - Arguments to find a ExternalLinks
     * @example
     * // Get one ExternalLinks
     * const externalLinks = await prisma.externalLinks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExternalLinksFindUniqueOrThrowArgs>(args: SelectSubset<T, ExternalLinksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExternalLinksClient<$Result.GetResult<Prisma.$ExternalLinksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExternalLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalLinksFindFirstArgs} args - Arguments to find a ExternalLinks
     * @example
     * // Get one ExternalLinks
     * const externalLinks = await prisma.externalLinks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExternalLinksFindFirstArgs>(args?: SelectSubset<T, ExternalLinksFindFirstArgs<ExtArgs>>): Prisma__ExternalLinksClient<$Result.GetResult<Prisma.$ExternalLinksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExternalLinks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalLinksFindFirstOrThrowArgs} args - Arguments to find a ExternalLinks
     * @example
     * // Get one ExternalLinks
     * const externalLinks = await prisma.externalLinks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExternalLinksFindFirstOrThrowArgs>(args?: SelectSubset<T, ExternalLinksFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExternalLinksClient<$Result.GetResult<Prisma.$ExternalLinksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExternalLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalLinksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExternalLinks
     * const externalLinks = await prisma.externalLinks.findMany()
     * 
     * // Get first 10 ExternalLinks
     * const externalLinks = await prisma.externalLinks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const externalLinksWithIdOnly = await prisma.externalLinks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExternalLinksFindManyArgs>(args?: SelectSubset<T, ExternalLinksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalLinksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExternalLinks.
     * @param {ExternalLinksCreateArgs} args - Arguments to create a ExternalLinks.
     * @example
     * // Create one ExternalLinks
     * const ExternalLinks = await prisma.externalLinks.create({
     *   data: {
     *     // ... data to create a ExternalLinks
     *   }
     * })
     * 
     */
    create<T extends ExternalLinksCreateArgs>(args: SelectSubset<T, ExternalLinksCreateArgs<ExtArgs>>): Prisma__ExternalLinksClient<$Result.GetResult<Prisma.$ExternalLinksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExternalLinks.
     * @param {ExternalLinksCreateManyArgs} args - Arguments to create many ExternalLinks.
     * @example
     * // Create many ExternalLinks
     * const externalLinks = await prisma.externalLinks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExternalLinksCreateManyArgs>(args?: SelectSubset<T, ExternalLinksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExternalLinks and returns the data saved in the database.
     * @param {ExternalLinksCreateManyAndReturnArgs} args - Arguments to create many ExternalLinks.
     * @example
     * // Create many ExternalLinks
     * const externalLinks = await prisma.externalLinks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExternalLinks and only return the `id`
     * const externalLinksWithIdOnly = await prisma.externalLinks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExternalLinksCreateManyAndReturnArgs>(args?: SelectSubset<T, ExternalLinksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalLinksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExternalLinks.
     * @param {ExternalLinksDeleteArgs} args - Arguments to delete one ExternalLinks.
     * @example
     * // Delete one ExternalLinks
     * const ExternalLinks = await prisma.externalLinks.delete({
     *   where: {
     *     // ... filter to delete one ExternalLinks
     *   }
     * })
     * 
     */
    delete<T extends ExternalLinksDeleteArgs>(args: SelectSubset<T, ExternalLinksDeleteArgs<ExtArgs>>): Prisma__ExternalLinksClient<$Result.GetResult<Prisma.$ExternalLinksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExternalLinks.
     * @param {ExternalLinksUpdateArgs} args - Arguments to update one ExternalLinks.
     * @example
     * // Update one ExternalLinks
     * const externalLinks = await prisma.externalLinks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExternalLinksUpdateArgs>(args: SelectSubset<T, ExternalLinksUpdateArgs<ExtArgs>>): Prisma__ExternalLinksClient<$Result.GetResult<Prisma.$ExternalLinksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExternalLinks.
     * @param {ExternalLinksDeleteManyArgs} args - Arguments to filter ExternalLinks to delete.
     * @example
     * // Delete a few ExternalLinks
     * const { count } = await prisma.externalLinks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExternalLinksDeleteManyArgs>(args?: SelectSubset<T, ExternalLinksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalLinksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExternalLinks
     * const externalLinks = await prisma.externalLinks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExternalLinksUpdateManyArgs>(args: SelectSubset<T, ExternalLinksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalLinks and returns the data updated in the database.
     * @param {ExternalLinksUpdateManyAndReturnArgs} args - Arguments to update many ExternalLinks.
     * @example
     * // Update many ExternalLinks
     * const externalLinks = await prisma.externalLinks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExternalLinks and only return the `id`
     * const externalLinksWithIdOnly = await prisma.externalLinks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExternalLinksUpdateManyAndReturnArgs>(args: SelectSubset<T, ExternalLinksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalLinksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExternalLinks.
     * @param {ExternalLinksUpsertArgs} args - Arguments to update or create a ExternalLinks.
     * @example
     * // Update or create a ExternalLinks
     * const externalLinks = await prisma.externalLinks.upsert({
     *   create: {
     *     // ... data to create a ExternalLinks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExternalLinks we want to update
     *   }
     * })
     */
    upsert<T extends ExternalLinksUpsertArgs>(args: SelectSubset<T, ExternalLinksUpsertArgs<ExtArgs>>): Prisma__ExternalLinksClient<$Result.GetResult<Prisma.$ExternalLinksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExternalLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalLinksCountArgs} args - Arguments to filter ExternalLinks to count.
     * @example
     * // Count the number of ExternalLinks
     * const count = await prisma.externalLinks.count({
     *   where: {
     *     // ... the filter for the ExternalLinks we want to count
     *   }
     * })
    **/
    count<T extends ExternalLinksCountArgs>(
      args?: Subset<T, ExternalLinksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExternalLinksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExternalLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalLinksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExternalLinksAggregateArgs>(args: Subset<T, ExternalLinksAggregateArgs>): Prisma.PrismaPromise<GetExternalLinksAggregateType<T>>

    /**
     * Group by ExternalLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalLinksGroupByArgs} args - Group by arguments.
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
      T extends ExternalLinksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExternalLinksGroupByArgs['orderBy'] }
        : { orderBy?: ExternalLinksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExternalLinksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternalLinksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExternalLinks model
   */
  readonly fields: ExternalLinksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExternalLinks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExternalLinksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    institutionInstance<T extends ExternalLinks$institutionInstanceArgs<ExtArgs> = {}>(args?: Subset<T, ExternalLinks$institutionInstanceArgs<ExtArgs>>): Prisma__InstitutionInstanceClient<$Result.GetResult<Prisma.$InstitutionInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExternalLinks model
   */
  interface ExternalLinksFieldRefs {
    readonly id: FieldRef<"ExternalLinks", 'String'>
    readonly createdAt: FieldRef<"ExternalLinks", 'DateTime'>
    readonly updatedAt: FieldRef<"ExternalLinks", 'DateTime'>
    readonly url: FieldRef<"ExternalLinks", 'String'>
    readonly name: FieldRef<"ExternalLinks", 'String'>
    readonly emoji: FieldRef<"ExternalLinks", 'String'>
    readonly scope: FieldRef<"ExternalLinks", 'ExternalLinkScope'>
    readonly institutionInstanceId: FieldRef<"ExternalLinks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExternalLinks findUnique
   */
  export type ExternalLinksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalLinks
     */
    select?: ExternalLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalLinks
     */
    omit?: ExternalLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalLinksInclude<ExtArgs> | null
    /**
     * Filter, which ExternalLinks to fetch.
     */
    where: ExternalLinksWhereUniqueInput
  }

  /**
   * ExternalLinks findUniqueOrThrow
   */
  export type ExternalLinksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalLinks
     */
    select?: ExternalLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalLinks
     */
    omit?: ExternalLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalLinksInclude<ExtArgs> | null
    /**
     * Filter, which ExternalLinks to fetch.
     */
    where: ExternalLinksWhereUniqueInput
  }

  /**
   * ExternalLinks findFirst
   */
  export type ExternalLinksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalLinks
     */
    select?: ExternalLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalLinks
     */
    omit?: ExternalLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalLinksInclude<ExtArgs> | null
    /**
     * Filter, which ExternalLinks to fetch.
     */
    where?: ExternalLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalLinks to fetch.
     */
    orderBy?: ExternalLinksOrderByWithRelationInput | ExternalLinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalLinks.
     */
    cursor?: ExternalLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalLinks.
     */
    distinct?: ExternalLinksScalarFieldEnum | ExternalLinksScalarFieldEnum[]
  }

  /**
   * ExternalLinks findFirstOrThrow
   */
  export type ExternalLinksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalLinks
     */
    select?: ExternalLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalLinks
     */
    omit?: ExternalLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalLinksInclude<ExtArgs> | null
    /**
     * Filter, which ExternalLinks to fetch.
     */
    where?: ExternalLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalLinks to fetch.
     */
    orderBy?: ExternalLinksOrderByWithRelationInput | ExternalLinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalLinks.
     */
    cursor?: ExternalLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalLinks.
     */
    distinct?: ExternalLinksScalarFieldEnum | ExternalLinksScalarFieldEnum[]
  }

  /**
   * ExternalLinks findMany
   */
  export type ExternalLinksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalLinks
     */
    select?: ExternalLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalLinks
     */
    omit?: ExternalLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalLinksInclude<ExtArgs> | null
    /**
     * Filter, which ExternalLinks to fetch.
     */
    where?: ExternalLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalLinks to fetch.
     */
    orderBy?: ExternalLinksOrderByWithRelationInput | ExternalLinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExternalLinks.
     */
    cursor?: ExternalLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalLinks.
     */
    skip?: number
    distinct?: ExternalLinksScalarFieldEnum | ExternalLinksScalarFieldEnum[]
  }

  /**
   * ExternalLinks create
   */
  export type ExternalLinksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalLinks
     */
    select?: ExternalLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalLinks
     */
    omit?: ExternalLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalLinksInclude<ExtArgs> | null
    /**
     * The data needed to create a ExternalLinks.
     */
    data: XOR<ExternalLinksCreateInput, ExternalLinksUncheckedCreateInput>
  }

  /**
   * ExternalLinks createMany
   */
  export type ExternalLinksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExternalLinks.
     */
    data: ExternalLinksCreateManyInput | ExternalLinksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExternalLinks createManyAndReturn
   */
  export type ExternalLinksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalLinks
     */
    select?: ExternalLinksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalLinks
     */
    omit?: ExternalLinksOmit<ExtArgs> | null
    /**
     * The data used to create many ExternalLinks.
     */
    data: ExternalLinksCreateManyInput | ExternalLinksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalLinksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExternalLinks update
   */
  export type ExternalLinksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalLinks
     */
    select?: ExternalLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalLinks
     */
    omit?: ExternalLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalLinksInclude<ExtArgs> | null
    /**
     * The data needed to update a ExternalLinks.
     */
    data: XOR<ExternalLinksUpdateInput, ExternalLinksUncheckedUpdateInput>
    /**
     * Choose, which ExternalLinks to update.
     */
    where: ExternalLinksWhereUniqueInput
  }

  /**
   * ExternalLinks updateMany
   */
  export type ExternalLinksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExternalLinks.
     */
    data: XOR<ExternalLinksUpdateManyMutationInput, ExternalLinksUncheckedUpdateManyInput>
    /**
     * Filter which ExternalLinks to update
     */
    where?: ExternalLinksWhereInput
    /**
     * Limit how many ExternalLinks to update.
     */
    limit?: number
  }

  /**
   * ExternalLinks updateManyAndReturn
   */
  export type ExternalLinksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalLinks
     */
    select?: ExternalLinksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalLinks
     */
    omit?: ExternalLinksOmit<ExtArgs> | null
    /**
     * The data used to update ExternalLinks.
     */
    data: XOR<ExternalLinksUpdateManyMutationInput, ExternalLinksUncheckedUpdateManyInput>
    /**
     * Filter which ExternalLinks to update
     */
    where?: ExternalLinksWhereInput
    /**
     * Limit how many ExternalLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalLinksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExternalLinks upsert
   */
  export type ExternalLinksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalLinks
     */
    select?: ExternalLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalLinks
     */
    omit?: ExternalLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalLinksInclude<ExtArgs> | null
    /**
     * The filter to search for the ExternalLinks to update in case it exists.
     */
    where: ExternalLinksWhereUniqueInput
    /**
     * In case the ExternalLinks found by the `where` argument doesn't exist, create a new ExternalLinks with this data.
     */
    create: XOR<ExternalLinksCreateInput, ExternalLinksUncheckedCreateInput>
    /**
     * In case the ExternalLinks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExternalLinksUpdateInput, ExternalLinksUncheckedUpdateInput>
  }

  /**
   * ExternalLinks delete
   */
  export type ExternalLinksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalLinks
     */
    select?: ExternalLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalLinks
     */
    omit?: ExternalLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalLinksInclude<ExtArgs> | null
    /**
     * Filter which ExternalLinks to delete.
     */
    where: ExternalLinksWhereUniqueInput
  }

  /**
   * ExternalLinks deleteMany
   */
  export type ExternalLinksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalLinks to delete
     */
    where?: ExternalLinksWhereInput
    /**
     * Limit how many ExternalLinks to delete.
     */
    limit?: number
  }

  /**
   * ExternalLinks.institutionInstance
   */
  export type ExternalLinks$institutionInstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstance
     */
    select?: InstitutionInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstance
     */
    omit?: InstitutionInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceInclude<ExtArgs> | null
    where?: InstitutionInstanceWhereInput
  }

  /**
   * ExternalLinks without action
   */
  export type ExternalLinksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalLinks
     */
    select?: ExternalLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalLinks
     */
    omit?: ExternalLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalLinksInclude<ExtArgs> | null
  }


  /**
   * Model Articles
   */

  export type AggregateArticles = {
    _count: ArticlesCountAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  export type ArticlesMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    content: string | null
    isPublished: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticlesMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    content: string | null
    isPublished: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticlesCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    content: number
    isPublished: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticlesMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    isPublished?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticlesMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    isPublished?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticlesCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    isPublished?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to aggregate.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticlesMaxAggregateInputType
  }

  export type GetArticlesAggregateType<T extends ArticlesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticles[P]>
      : GetScalarType<T[P], AggregateArticles[P]>
  }




  export type ArticlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticlesWhereInput
    orderBy?: ArticlesOrderByWithAggregationInput | ArticlesOrderByWithAggregationInput[]
    by: ArticlesScalarFieldEnum[] | ArticlesScalarFieldEnum
    having?: ArticlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticlesCountAggregateInputType | true
    _min?: ArticlesMinAggregateInputType
    _max?: ArticlesMaxAggregateInputType
  }

  export type ArticlesGroupByOutputType = {
    id: string
    slug: string
    title: string
    content: string
    isPublished: boolean
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ArticlesCountAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  type GetArticlesGroupByPayload<T extends ArticlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
            : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
        }
      >
    >


  export type ArticlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["articles"]>

  export type ArticlesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["articles"]>

  export type ArticlesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["articles"]>

  export type ArticlesSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "content" | "isPublished" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["articles"]>

  export type $ArticlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Articles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      content: string
      isPublished: boolean
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articles"]>
    composites: {}
  }

  type ArticlesGetPayload<S extends boolean | null | undefined | ArticlesDefaultArgs> = $Result.GetResult<Prisma.$ArticlesPayload, S>

  type ArticlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticlesCountAggregateInputType | true
    }

  export interface ArticlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Articles'], meta: { name: 'Articles' } }
    /**
     * Find zero or one Articles that matches the filter.
     * @param {ArticlesFindUniqueArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticlesFindUniqueArgs>(args: SelectSubset<T, ArticlesFindUniqueArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Articles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticlesFindUniqueOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticlesFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindFirstArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticlesFindFirstArgs>(args?: SelectSubset<T, ArticlesFindFirstArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindFirstOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticlesFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.articles.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.articles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articlesWithIdOnly = await prisma.articles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticlesFindManyArgs>(args?: SelectSubset<T, ArticlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Articles.
     * @param {ArticlesCreateArgs} args - Arguments to create a Articles.
     * @example
     * // Create one Articles
     * const Articles = await prisma.articles.create({
     *   data: {
     *     // ... data to create a Articles
     *   }
     * })
     * 
     */
    create<T extends ArticlesCreateArgs>(args: SelectSubset<T, ArticlesCreateArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticlesCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const articles = await prisma.articles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticlesCreateManyArgs>(args?: SelectSubset<T, ArticlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticlesCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const articles = await prisma.articles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articlesWithIdOnly = await prisma.articles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticlesCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticlesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Articles.
     * @param {ArticlesDeleteArgs} args - Arguments to delete one Articles.
     * @example
     * // Delete one Articles
     * const Articles = await prisma.articles.delete({
     *   where: {
     *     // ... filter to delete one Articles
     *   }
     * })
     * 
     */
    delete<T extends ArticlesDeleteArgs>(args: SelectSubset<T, ArticlesDeleteArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Articles.
     * @param {ArticlesUpdateArgs} args - Arguments to update one Articles.
     * @example
     * // Update one Articles
     * const articles = await prisma.articles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticlesUpdateArgs>(args: SelectSubset<T, ArticlesUpdateArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticlesDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.articles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticlesDeleteManyArgs>(args?: SelectSubset<T, ArticlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticlesUpdateManyArgs>(args: SelectSubset<T, ArticlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticlesUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articlesWithIdOnly = await prisma.articles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticlesUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticlesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Articles.
     * @param {ArticlesUpsertArgs} args - Arguments to update or create a Articles.
     * @example
     * // Update or create a Articles
     * const articles = await prisma.articles.upsert({
     *   create: {
     *     // ... data to create a Articles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articles we want to update
     *   }
     * })
     */
    upsert<T extends ArticlesUpsertArgs>(args: SelectSubset<T, ArticlesUpsertArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.articles.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticlesCountArgs>(
      args?: Subset<T, ArticlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticlesAggregateArgs>(args: Subset<T, ArticlesAggregateArgs>): Prisma.PrismaPromise<GetArticlesAggregateType<T>>

    /**
     * Group by Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesGroupByArgs} args - Group by arguments.
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
      T extends ArticlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticlesGroupByArgs['orderBy'] }
        : { orderBy?: ArticlesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Articles model
   */
  readonly fields: ArticlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Articles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Articles model
   */
  interface ArticlesFieldRefs {
    readonly id: FieldRef<"Articles", 'String'>
    readonly slug: FieldRef<"Articles", 'String'>
    readonly title: FieldRef<"Articles", 'String'>
    readonly content: FieldRef<"Articles", 'String'>
    readonly isPublished: FieldRef<"Articles", 'Boolean'>
    readonly publishedAt: FieldRef<"Articles", 'DateTime'>
    readonly createdAt: FieldRef<"Articles", 'DateTime'>
    readonly updatedAt: FieldRef<"Articles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Articles findUnique
   */
  export type ArticlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles findUniqueOrThrow
   */
  export type ArticlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles findFirst
   */
  export type ArticlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles findFirstOrThrow
   */
  export type ArticlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles findMany
   */
  export type ArticlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles create
   */
  export type ArticlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * The data needed to create a Articles.
     */
    data: XOR<ArticlesCreateInput, ArticlesUncheckedCreateInput>
  }

  /**
   * Articles createMany
   */
  export type ArticlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticlesCreateManyInput | ArticlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Articles createManyAndReturn
   */
  export type ArticlesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticlesCreateManyInput | ArticlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Articles update
   */
  export type ArticlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * The data needed to update a Articles.
     */
    data: XOR<ArticlesUpdateInput, ArticlesUncheckedUpdateInput>
    /**
     * Choose, which Articles to update.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles updateMany
   */
  export type ArticlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticlesUpdateManyMutationInput, ArticlesUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticlesWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Articles updateManyAndReturn
   */
  export type ArticlesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticlesUpdateManyMutationInput, ArticlesUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticlesWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Articles upsert
   */
  export type ArticlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * The filter to search for the Articles to update in case it exists.
     */
    where: ArticlesWhereUniqueInput
    /**
     * In case the Articles found by the `where` argument doesn't exist, create a new Articles with this data.
     */
    create: XOR<ArticlesCreateInput, ArticlesUncheckedCreateInput>
    /**
     * In case the Articles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticlesUpdateInput, ArticlesUncheckedUpdateInput>
  }

  /**
   * Articles delete
   */
  export type ArticlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Filter which Articles to delete.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles deleteMany
   */
  export type ArticlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticlesWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Articles without action
   */
  export type ArticlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
  }


  /**
   * Model InstitutionInstance
   */

  export type AggregateInstitutionInstance = {
    _count: InstitutionInstanceCountAggregateOutputType | null
    _min: InstitutionInstanceMinAggregateOutputType | null
    _max: InstitutionInstanceMaxAggregateOutputType | null
  }

  export type InstitutionInstanceMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    institutionName: string | null
    institutionSlug: string | null
  }

  export type InstitutionInstanceMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    institutionName: string | null
    institutionSlug: string | null
  }

  export type InstitutionInstanceCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    institutionName: number
    institutionSlug: number
    _all: number
  }


  export type InstitutionInstanceMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    institutionName?: true
    institutionSlug?: true
  }

  export type InstitutionInstanceMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    institutionName?: true
    institutionSlug?: true
  }

  export type InstitutionInstanceCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    institutionName?: true
    institutionSlug?: true
    _all?: true
  }

  export type InstitutionInstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstitutionInstance to aggregate.
     */
    where?: InstitutionInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionInstances to fetch.
     */
    orderBy?: InstitutionInstanceOrderByWithRelationInput | InstitutionInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstitutionInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstitutionInstances
    **/
    _count?: true | InstitutionInstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstitutionInstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstitutionInstanceMaxAggregateInputType
  }

  export type GetInstitutionInstanceAggregateType<T extends InstitutionInstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitutionInstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitutionInstance[P]>
      : GetScalarType<T[P], AggregateInstitutionInstance[P]>
  }




  export type InstitutionInstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionInstanceWhereInput
    orderBy?: InstitutionInstanceOrderByWithAggregationInput | InstitutionInstanceOrderByWithAggregationInput[]
    by: InstitutionInstanceScalarFieldEnum[] | InstitutionInstanceScalarFieldEnum
    having?: InstitutionInstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstitutionInstanceCountAggregateInputType | true
    _min?: InstitutionInstanceMinAggregateInputType
    _max?: InstitutionInstanceMaxAggregateInputType
  }

  export type InstitutionInstanceGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    institutionName: string
    institutionSlug: string
    _count: InstitutionInstanceCountAggregateOutputType | null
    _min: InstitutionInstanceMinAggregateOutputType | null
    _max: InstitutionInstanceMaxAggregateOutputType | null
  }

  type GetInstitutionInstanceGroupByPayload<T extends InstitutionInstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionInstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstitutionInstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstitutionInstanceGroupByOutputType[P]>
            : GetScalarType<T[P], InstitutionInstanceGroupByOutputType[P]>
        }
      >
    >


  export type InstitutionInstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institutionName?: boolean
    institutionSlug?: boolean
    modules?: boolean | InstitutionInstance$modulesArgs<ExtArgs>
    User?: boolean | InstitutionInstance$UserArgs<ExtArgs>
    externalLinks?: boolean | InstitutionInstance$externalLinksArgs<ExtArgs>
    _count?: boolean | InstitutionInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institutionInstance"]>

  export type InstitutionInstanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institutionName?: boolean
    institutionSlug?: boolean
  }, ExtArgs["result"]["institutionInstance"]>

  export type InstitutionInstanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institutionName?: boolean
    institutionSlug?: boolean
  }, ExtArgs["result"]["institutionInstance"]>

  export type InstitutionInstanceSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institutionName?: boolean
    institutionSlug?: boolean
  }

  export type InstitutionInstanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "institutionName" | "institutionSlug", ExtArgs["result"]["institutionInstance"]>
  export type InstitutionInstanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | InstitutionInstance$modulesArgs<ExtArgs>
    User?: boolean | InstitutionInstance$UserArgs<ExtArgs>
    externalLinks?: boolean | InstitutionInstance$externalLinksArgs<ExtArgs>
    _count?: boolean | InstitutionInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstitutionInstanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstitutionInstanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstitutionInstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstitutionInstance"
    objects: {
      modules: Prisma.$InstitutionInstanceModulePayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
      externalLinks: Prisma.$ExternalLinksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      institutionName: string
      institutionSlug: string
    }, ExtArgs["result"]["institutionInstance"]>
    composites: {}
  }

  type InstitutionInstanceGetPayload<S extends boolean | null | undefined | InstitutionInstanceDefaultArgs> = $Result.GetResult<Prisma.$InstitutionInstancePayload, S>

  type InstitutionInstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstitutionInstanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstitutionInstanceCountAggregateInputType | true
    }

  export interface InstitutionInstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstitutionInstance'], meta: { name: 'InstitutionInstance' } }
    /**
     * Find zero or one InstitutionInstance that matches the filter.
     * @param {InstitutionInstanceFindUniqueArgs} args - Arguments to find a InstitutionInstance
     * @example
     * // Get one InstitutionInstance
     * const institutionInstance = await prisma.institutionInstance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstitutionInstanceFindUniqueArgs>(args: SelectSubset<T, InstitutionInstanceFindUniqueArgs<ExtArgs>>): Prisma__InstitutionInstanceClient<$Result.GetResult<Prisma.$InstitutionInstancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstitutionInstance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstitutionInstanceFindUniqueOrThrowArgs} args - Arguments to find a InstitutionInstance
     * @example
     * // Get one InstitutionInstance
     * const institutionInstance = await prisma.institutionInstance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstitutionInstanceFindUniqueOrThrowArgs>(args: SelectSubset<T, InstitutionInstanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstitutionInstanceClient<$Result.GetResult<Prisma.$InstitutionInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstitutionInstance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceFindFirstArgs} args - Arguments to find a InstitutionInstance
     * @example
     * // Get one InstitutionInstance
     * const institutionInstance = await prisma.institutionInstance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstitutionInstanceFindFirstArgs>(args?: SelectSubset<T, InstitutionInstanceFindFirstArgs<ExtArgs>>): Prisma__InstitutionInstanceClient<$Result.GetResult<Prisma.$InstitutionInstancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstitutionInstance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceFindFirstOrThrowArgs} args - Arguments to find a InstitutionInstance
     * @example
     * // Get one InstitutionInstance
     * const institutionInstance = await prisma.institutionInstance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstitutionInstanceFindFirstOrThrowArgs>(args?: SelectSubset<T, InstitutionInstanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstitutionInstanceClient<$Result.GetResult<Prisma.$InstitutionInstancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstitutionInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstitutionInstances
     * const institutionInstances = await prisma.institutionInstance.findMany()
     * 
     * // Get first 10 InstitutionInstances
     * const institutionInstances = await prisma.institutionInstance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const institutionInstanceWithIdOnly = await prisma.institutionInstance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstitutionInstanceFindManyArgs>(args?: SelectSubset<T, InstitutionInstanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstitutionInstance.
     * @param {InstitutionInstanceCreateArgs} args - Arguments to create a InstitutionInstance.
     * @example
     * // Create one InstitutionInstance
     * const InstitutionInstance = await prisma.institutionInstance.create({
     *   data: {
     *     // ... data to create a InstitutionInstance
     *   }
     * })
     * 
     */
    create<T extends InstitutionInstanceCreateArgs>(args: SelectSubset<T, InstitutionInstanceCreateArgs<ExtArgs>>): Prisma__InstitutionInstanceClient<$Result.GetResult<Prisma.$InstitutionInstancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstitutionInstances.
     * @param {InstitutionInstanceCreateManyArgs} args - Arguments to create many InstitutionInstances.
     * @example
     * // Create many InstitutionInstances
     * const institutionInstance = await prisma.institutionInstance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstitutionInstanceCreateManyArgs>(args?: SelectSubset<T, InstitutionInstanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstitutionInstances and returns the data saved in the database.
     * @param {InstitutionInstanceCreateManyAndReturnArgs} args - Arguments to create many InstitutionInstances.
     * @example
     * // Create many InstitutionInstances
     * const institutionInstance = await prisma.institutionInstance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstitutionInstances and only return the `id`
     * const institutionInstanceWithIdOnly = await prisma.institutionInstance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstitutionInstanceCreateManyAndReturnArgs>(args?: SelectSubset<T, InstitutionInstanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionInstancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstitutionInstance.
     * @param {InstitutionInstanceDeleteArgs} args - Arguments to delete one InstitutionInstance.
     * @example
     * // Delete one InstitutionInstance
     * const InstitutionInstance = await prisma.institutionInstance.delete({
     *   where: {
     *     // ... filter to delete one InstitutionInstance
     *   }
     * })
     * 
     */
    delete<T extends InstitutionInstanceDeleteArgs>(args: SelectSubset<T, InstitutionInstanceDeleteArgs<ExtArgs>>): Prisma__InstitutionInstanceClient<$Result.GetResult<Prisma.$InstitutionInstancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstitutionInstance.
     * @param {InstitutionInstanceUpdateArgs} args - Arguments to update one InstitutionInstance.
     * @example
     * // Update one InstitutionInstance
     * const institutionInstance = await prisma.institutionInstance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstitutionInstanceUpdateArgs>(args: SelectSubset<T, InstitutionInstanceUpdateArgs<ExtArgs>>): Prisma__InstitutionInstanceClient<$Result.GetResult<Prisma.$InstitutionInstancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstitutionInstances.
     * @param {InstitutionInstanceDeleteManyArgs} args - Arguments to filter InstitutionInstances to delete.
     * @example
     * // Delete a few InstitutionInstances
     * const { count } = await prisma.institutionInstance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstitutionInstanceDeleteManyArgs>(args?: SelectSubset<T, InstitutionInstanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstitutionInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstitutionInstances
     * const institutionInstance = await prisma.institutionInstance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstitutionInstanceUpdateManyArgs>(args: SelectSubset<T, InstitutionInstanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstitutionInstances and returns the data updated in the database.
     * @param {InstitutionInstanceUpdateManyAndReturnArgs} args - Arguments to update many InstitutionInstances.
     * @example
     * // Update many InstitutionInstances
     * const institutionInstance = await prisma.institutionInstance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstitutionInstances and only return the `id`
     * const institutionInstanceWithIdOnly = await prisma.institutionInstance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstitutionInstanceUpdateManyAndReturnArgs>(args: SelectSubset<T, InstitutionInstanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionInstancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstitutionInstance.
     * @param {InstitutionInstanceUpsertArgs} args - Arguments to update or create a InstitutionInstance.
     * @example
     * // Update or create a InstitutionInstance
     * const institutionInstance = await prisma.institutionInstance.upsert({
     *   create: {
     *     // ... data to create a InstitutionInstance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstitutionInstance we want to update
     *   }
     * })
     */
    upsert<T extends InstitutionInstanceUpsertArgs>(args: SelectSubset<T, InstitutionInstanceUpsertArgs<ExtArgs>>): Prisma__InstitutionInstanceClient<$Result.GetResult<Prisma.$InstitutionInstancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstitutionInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceCountArgs} args - Arguments to filter InstitutionInstances to count.
     * @example
     * // Count the number of InstitutionInstances
     * const count = await prisma.institutionInstance.count({
     *   where: {
     *     // ... the filter for the InstitutionInstances we want to count
     *   }
     * })
    **/
    count<T extends InstitutionInstanceCountArgs>(
      args?: Subset<T, InstitutionInstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionInstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstitutionInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstitutionInstanceAggregateArgs>(args: Subset<T, InstitutionInstanceAggregateArgs>): Prisma.PrismaPromise<GetInstitutionInstanceAggregateType<T>>

    /**
     * Group by InstitutionInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceGroupByArgs} args - Group by arguments.
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
      T extends InstitutionInstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstitutionInstanceGroupByArgs['orderBy'] }
        : { orderBy?: InstitutionInstanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstitutionInstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionInstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstitutionInstance model
   */
  readonly fields: InstitutionInstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstitutionInstance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstitutionInstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modules<T extends InstitutionInstance$modulesArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionInstance$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionInstanceModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends InstitutionInstance$UserArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionInstance$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    externalLinks<T extends InstitutionInstance$externalLinksArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionInstance$externalLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalLinksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the InstitutionInstance model
   */
  interface InstitutionInstanceFieldRefs {
    readonly id: FieldRef<"InstitutionInstance", 'String'>
    readonly createdAt: FieldRef<"InstitutionInstance", 'DateTime'>
    readonly updatedAt: FieldRef<"InstitutionInstance", 'DateTime'>
    readonly institutionName: FieldRef<"InstitutionInstance", 'String'>
    readonly institutionSlug: FieldRef<"InstitutionInstance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InstitutionInstance findUnique
   */
  export type InstitutionInstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstance
     */
    select?: InstitutionInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstance
     */
    omit?: InstitutionInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionInstance to fetch.
     */
    where: InstitutionInstanceWhereUniqueInput
  }

  /**
   * InstitutionInstance findUniqueOrThrow
   */
  export type InstitutionInstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstance
     */
    select?: InstitutionInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstance
     */
    omit?: InstitutionInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionInstance to fetch.
     */
    where: InstitutionInstanceWhereUniqueInput
  }

  /**
   * InstitutionInstance findFirst
   */
  export type InstitutionInstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstance
     */
    select?: InstitutionInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstance
     */
    omit?: InstitutionInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionInstance to fetch.
     */
    where?: InstitutionInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionInstances to fetch.
     */
    orderBy?: InstitutionInstanceOrderByWithRelationInput | InstitutionInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstitutionInstances.
     */
    cursor?: InstitutionInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstitutionInstances.
     */
    distinct?: InstitutionInstanceScalarFieldEnum | InstitutionInstanceScalarFieldEnum[]
  }

  /**
   * InstitutionInstance findFirstOrThrow
   */
  export type InstitutionInstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstance
     */
    select?: InstitutionInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstance
     */
    omit?: InstitutionInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionInstance to fetch.
     */
    where?: InstitutionInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionInstances to fetch.
     */
    orderBy?: InstitutionInstanceOrderByWithRelationInput | InstitutionInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstitutionInstances.
     */
    cursor?: InstitutionInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstitutionInstances.
     */
    distinct?: InstitutionInstanceScalarFieldEnum | InstitutionInstanceScalarFieldEnum[]
  }

  /**
   * InstitutionInstance findMany
   */
  export type InstitutionInstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstance
     */
    select?: InstitutionInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstance
     */
    omit?: InstitutionInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionInstances to fetch.
     */
    where?: InstitutionInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionInstances to fetch.
     */
    orderBy?: InstitutionInstanceOrderByWithRelationInput | InstitutionInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstitutionInstances.
     */
    cursor?: InstitutionInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionInstances.
     */
    skip?: number
    distinct?: InstitutionInstanceScalarFieldEnum | InstitutionInstanceScalarFieldEnum[]
  }

  /**
   * InstitutionInstance create
   */
  export type InstitutionInstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstance
     */
    select?: InstitutionInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstance
     */
    omit?: InstitutionInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceInclude<ExtArgs> | null
    /**
     * The data needed to create a InstitutionInstance.
     */
    data: XOR<InstitutionInstanceCreateInput, InstitutionInstanceUncheckedCreateInput>
  }

  /**
   * InstitutionInstance createMany
   */
  export type InstitutionInstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstitutionInstances.
     */
    data: InstitutionInstanceCreateManyInput | InstitutionInstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstitutionInstance createManyAndReturn
   */
  export type InstitutionInstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstance
     */
    select?: InstitutionInstanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstance
     */
    omit?: InstitutionInstanceOmit<ExtArgs> | null
    /**
     * The data used to create many InstitutionInstances.
     */
    data: InstitutionInstanceCreateManyInput | InstitutionInstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstitutionInstance update
   */
  export type InstitutionInstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstance
     */
    select?: InstitutionInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstance
     */
    omit?: InstitutionInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceInclude<ExtArgs> | null
    /**
     * The data needed to update a InstitutionInstance.
     */
    data: XOR<InstitutionInstanceUpdateInput, InstitutionInstanceUncheckedUpdateInput>
    /**
     * Choose, which InstitutionInstance to update.
     */
    where: InstitutionInstanceWhereUniqueInput
  }

  /**
   * InstitutionInstance updateMany
   */
  export type InstitutionInstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstitutionInstances.
     */
    data: XOR<InstitutionInstanceUpdateManyMutationInput, InstitutionInstanceUncheckedUpdateManyInput>
    /**
     * Filter which InstitutionInstances to update
     */
    where?: InstitutionInstanceWhereInput
    /**
     * Limit how many InstitutionInstances to update.
     */
    limit?: number
  }

  /**
   * InstitutionInstance updateManyAndReturn
   */
  export type InstitutionInstanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstance
     */
    select?: InstitutionInstanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstance
     */
    omit?: InstitutionInstanceOmit<ExtArgs> | null
    /**
     * The data used to update InstitutionInstances.
     */
    data: XOR<InstitutionInstanceUpdateManyMutationInput, InstitutionInstanceUncheckedUpdateManyInput>
    /**
     * Filter which InstitutionInstances to update
     */
    where?: InstitutionInstanceWhereInput
    /**
     * Limit how many InstitutionInstances to update.
     */
    limit?: number
  }

  /**
   * InstitutionInstance upsert
   */
  export type InstitutionInstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstance
     */
    select?: InstitutionInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstance
     */
    omit?: InstitutionInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceInclude<ExtArgs> | null
    /**
     * The filter to search for the InstitutionInstance to update in case it exists.
     */
    where: InstitutionInstanceWhereUniqueInput
    /**
     * In case the InstitutionInstance found by the `where` argument doesn't exist, create a new InstitutionInstance with this data.
     */
    create: XOR<InstitutionInstanceCreateInput, InstitutionInstanceUncheckedCreateInput>
    /**
     * In case the InstitutionInstance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstitutionInstanceUpdateInput, InstitutionInstanceUncheckedUpdateInput>
  }

  /**
   * InstitutionInstance delete
   */
  export type InstitutionInstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstance
     */
    select?: InstitutionInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstance
     */
    omit?: InstitutionInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceInclude<ExtArgs> | null
    /**
     * Filter which InstitutionInstance to delete.
     */
    where: InstitutionInstanceWhereUniqueInput
  }

  /**
   * InstitutionInstance deleteMany
   */
  export type InstitutionInstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstitutionInstances to delete
     */
    where?: InstitutionInstanceWhereInput
    /**
     * Limit how many InstitutionInstances to delete.
     */
    limit?: number
  }

  /**
   * InstitutionInstance.modules
   */
  export type InstitutionInstance$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModule
     */
    select?: InstitutionInstanceModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModule
     */
    omit?: InstitutionInstanceModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleInclude<ExtArgs> | null
    where?: InstitutionInstanceModuleWhereInput
    orderBy?: InstitutionInstanceModuleOrderByWithRelationInput | InstitutionInstanceModuleOrderByWithRelationInput[]
    cursor?: InstitutionInstanceModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstitutionInstanceModuleScalarFieldEnum | InstitutionInstanceModuleScalarFieldEnum[]
  }

  /**
   * InstitutionInstance.User
   */
  export type InstitutionInstance$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * InstitutionInstance.externalLinks
   */
  export type InstitutionInstance$externalLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalLinks
     */
    select?: ExternalLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalLinks
     */
    omit?: ExternalLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalLinksInclude<ExtArgs> | null
    where?: ExternalLinksWhereInput
    orderBy?: ExternalLinksOrderByWithRelationInput | ExternalLinksOrderByWithRelationInput[]
    cursor?: ExternalLinksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExternalLinksScalarFieldEnum | ExternalLinksScalarFieldEnum[]
  }

  /**
   * InstitutionInstance without action
   */
  export type InstitutionInstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstance
     */
    select?: InstitutionInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstance
     */
    omit?: InstitutionInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceInclude<ExtArgs> | null
  }


  /**
   * Model InstitutionInstanceModule
   */

  export type AggregateInstitutionInstanceModule = {
    _count: InstitutionInstanceModuleCountAggregateOutputType | null
    _avg: InstitutionInstanceModuleAvgAggregateOutputType | null
    _sum: InstitutionInstanceModuleSumAggregateOutputType | null
    _min: InstitutionInstanceModuleMinAggregateOutputType | null
    _max: InstitutionInstanceModuleMaxAggregateOutputType | null
  }

  export type InstitutionInstanceModuleAvgAggregateOutputType = {
    expectedMajorVersion: number | null
    expectedMinorVersion: number | null
  }

  export type InstitutionInstanceModuleSumAggregateOutputType = {
    expectedMajorVersion: number | null
    expectedMinorVersion: number | null
  }

  export type InstitutionInstanceModuleMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    baseURL: string | null
    isEnabled: boolean | null
    status: string | null
    apiKey: string | null
    expectedMajorVersion: number | null
    expectedMinorVersion: number | null
    instanceId: string | null
    typeId: string | null
  }

  export type InstitutionInstanceModuleMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    baseURL: string | null
    isEnabled: boolean | null
    status: string | null
    apiKey: string | null
    expectedMajorVersion: number | null
    expectedMinorVersion: number | null
    instanceId: string | null
    typeId: string | null
  }

  export type InstitutionInstanceModuleCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    baseURL: number
    isEnabled: number
    status: number
    apiKey: number
    expectedMajorVersion: number
    expectedMinorVersion: number
    instanceId: number
    typeId: number
    _all: number
  }


  export type InstitutionInstanceModuleAvgAggregateInputType = {
    expectedMajorVersion?: true
    expectedMinorVersion?: true
  }

  export type InstitutionInstanceModuleSumAggregateInputType = {
    expectedMajorVersion?: true
    expectedMinorVersion?: true
  }

  export type InstitutionInstanceModuleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    baseURL?: true
    isEnabled?: true
    status?: true
    apiKey?: true
    expectedMajorVersion?: true
    expectedMinorVersion?: true
    instanceId?: true
    typeId?: true
  }

  export type InstitutionInstanceModuleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    baseURL?: true
    isEnabled?: true
    status?: true
    apiKey?: true
    expectedMajorVersion?: true
    expectedMinorVersion?: true
    instanceId?: true
    typeId?: true
  }

  export type InstitutionInstanceModuleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    baseURL?: true
    isEnabled?: true
    status?: true
    apiKey?: true
    expectedMajorVersion?: true
    expectedMinorVersion?: true
    instanceId?: true
    typeId?: true
    _all?: true
  }

  export type InstitutionInstanceModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstitutionInstanceModule to aggregate.
     */
    where?: InstitutionInstanceModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionInstanceModules to fetch.
     */
    orderBy?: InstitutionInstanceModuleOrderByWithRelationInput | InstitutionInstanceModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstitutionInstanceModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionInstanceModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionInstanceModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstitutionInstanceModules
    **/
    _count?: true | InstitutionInstanceModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstitutionInstanceModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstitutionInstanceModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstitutionInstanceModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstitutionInstanceModuleMaxAggregateInputType
  }

  export type GetInstitutionInstanceModuleAggregateType<T extends InstitutionInstanceModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitutionInstanceModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitutionInstanceModule[P]>
      : GetScalarType<T[P], AggregateInstitutionInstanceModule[P]>
  }




  export type InstitutionInstanceModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionInstanceModuleWhereInput
    orderBy?: InstitutionInstanceModuleOrderByWithAggregationInput | InstitutionInstanceModuleOrderByWithAggregationInput[]
    by: InstitutionInstanceModuleScalarFieldEnum[] | InstitutionInstanceModuleScalarFieldEnum
    having?: InstitutionInstanceModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstitutionInstanceModuleCountAggregateInputType | true
    _avg?: InstitutionInstanceModuleAvgAggregateInputType
    _sum?: InstitutionInstanceModuleSumAggregateInputType
    _min?: InstitutionInstanceModuleMinAggregateInputType
    _max?: InstitutionInstanceModuleMaxAggregateInputType
  }

  export type InstitutionInstanceModuleGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    baseURL: string
    isEnabled: boolean
    status: string
    apiKey: string | null
    expectedMajorVersion: number
    expectedMinorVersion: number
    instanceId: string
    typeId: string
    _count: InstitutionInstanceModuleCountAggregateOutputType | null
    _avg: InstitutionInstanceModuleAvgAggregateOutputType | null
    _sum: InstitutionInstanceModuleSumAggregateOutputType | null
    _min: InstitutionInstanceModuleMinAggregateOutputType | null
    _max: InstitutionInstanceModuleMaxAggregateOutputType | null
  }

  type GetInstitutionInstanceModuleGroupByPayload<T extends InstitutionInstanceModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionInstanceModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstitutionInstanceModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstitutionInstanceModuleGroupByOutputType[P]>
            : GetScalarType<T[P], InstitutionInstanceModuleGroupByOutputType[P]>
        }
      >
    >


  export type InstitutionInstanceModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseURL?: boolean
    isEnabled?: boolean
    status?: boolean
    apiKey?: boolean
    expectedMajorVersion?: boolean
    expectedMinorVersion?: boolean
    instanceId?: boolean
    typeId?: boolean
    instance?: boolean | InstitutionInstanceDefaultArgs<ExtArgs>
    type?: boolean | InstitutionInstanceModuleTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institutionInstanceModule"]>

  export type InstitutionInstanceModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseURL?: boolean
    isEnabled?: boolean
    status?: boolean
    apiKey?: boolean
    expectedMajorVersion?: boolean
    expectedMinorVersion?: boolean
    instanceId?: boolean
    typeId?: boolean
    instance?: boolean | InstitutionInstanceDefaultArgs<ExtArgs>
    type?: boolean | InstitutionInstanceModuleTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institutionInstanceModule"]>

  export type InstitutionInstanceModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseURL?: boolean
    isEnabled?: boolean
    status?: boolean
    apiKey?: boolean
    expectedMajorVersion?: boolean
    expectedMinorVersion?: boolean
    instanceId?: boolean
    typeId?: boolean
    instance?: boolean | InstitutionInstanceDefaultArgs<ExtArgs>
    type?: boolean | InstitutionInstanceModuleTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institutionInstanceModule"]>

  export type InstitutionInstanceModuleSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseURL?: boolean
    isEnabled?: boolean
    status?: boolean
    apiKey?: boolean
    expectedMajorVersion?: boolean
    expectedMinorVersion?: boolean
    instanceId?: boolean
    typeId?: boolean
  }

  export type InstitutionInstanceModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "baseURL" | "isEnabled" | "status" | "apiKey" | "expectedMajorVersion" | "expectedMinorVersion" | "instanceId" | "typeId", ExtArgs["result"]["institutionInstanceModule"]>
  export type InstitutionInstanceModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instance?: boolean | InstitutionInstanceDefaultArgs<ExtArgs>
    type?: boolean | InstitutionInstanceModuleTypeDefaultArgs<ExtArgs>
  }
  export type InstitutionInstanceModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instance?: boolean | InstitutionInstanceDefaultArgs<ExtArgs>
    type?: boolean | InstitutionInstanceModuleTypeDefaultArgs<ExtArgs>
  }
  export type InstitutionInstanceModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instance?: boolean | InstitutionInstanceDefaultArgs<ExtArgs>
    type?: boolean | InstitutionInstanceModuleTypeDefaultArgs<ExtArgs>
  }

  export type $InstitutionInstanceModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstitutionInstanceModule"
    objects: {
      instance: Prisma.$InstitutionInstancePayload<ExtArgs>
      type: Prisma.$InstitutionInstanceModuleTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      baseURL: string
      isEnabled: boolean
      status: string
      apiKey: string | null
      expectedMajorVersion: number
      expectedMinorVersion: number
      instanceId: string
      typeId: string
    }, ExtArgs["result"]["institutionInstanceModule"]>
    composites: {}
  }

  type InstitutionInstanceModuleGetPayload<S extends boolean | null | undefined | InstitutionInstanceModuleDefaultArgs> = $Result.GetResult<Prisma.$InstitutionInstanceModulePayload, S>

  type InstitutionInstanceModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstitutionInstanceModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstitutionInstanceModuleCountAggregateInputType | true
    }

  export interface InstitutionInstanceModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstitutionInstanceModule'], meta: { name: 'InstitutionInstanceModule' } }
    /**
     * Find zero or one InstitutionInstanceModule that matches the filter.
     * @param {InstitutionInstanceModuleFindUniqueArgs} args - Arguments to find a InstitutionInstanceModule
     * @example
     * // Get one InstitutionInstanceModule
     * const institutionInstanceModule = await prisma.institutionInstanceModule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstitutionInstanceModuleFindUniqueArgs>(args: SelectSubset<T, InstitutionInstanceModuleFindUniqueArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleClient<$Result.GetResult<Prisma.$InstitutionInstanceModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstitutionInstanceModule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstitutionInstanceModuleFindUniqueOrThrowArgs} args - Arguments to find a InstitutionInstanceModule
     * @example
     * // Get one InstitutionInstanceModule
     * const institutionInstanceModule = await prisma.institutionInstanceModule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstitutionInstanceModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, InstitutionInstanceModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleClient<$Result.GetResult<Prisma.$InstitutionInstanceModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstitutionInstanceModule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceModuleFindFirstArgs} args - Arguments to find a InstitutionInstanceModule
     * @example
     * // Get one InstitutionInstanceModule
     * const institutionInstanceModule = await prisma.institutionInstanceModule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstitutionInstanceModuleFindFirstArgs>(args?: SelectSubset<T, InstitutionInstanceModuleFindFirstArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleClient<$Result.GetResult<Prisma.$InstitutionInstanceModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstitutionInstanceModule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceModuleFindFirstOrThrowArgs} args - Arguments to find a InstitutionInstanceModule
     * @example
     * // Get one InstitutionInstanceModule
     * const institutionInstanceModule = await prisma.institutionInstanceModule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstitutionInstanceModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, InstitutionInstanceModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleClient<$Result.GetResult<Prisma.$InstitutionInstanceModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstitutionInstanceModules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstitutionInstanceModules
     * const institutionInstanceModules = await prisma.institutionInstanceModule.findMany()
     * 
     * // Get first 10 InstitutionInstanceModules
     * const institutionInstanceModules = await prisma.institutionInstanceModule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const institutionInstanceModuleWithIdOnly = await prisma.institutionInstanceModule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstitutionInstanceModuleFindManyArgs>(args?: SelectSubset<T, InstitutionInstanceModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionInstanceModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstitutionInstanceModule.
     * @param {InstitutionInstanceModuleCreateArgs} args - Arguments to create a InstitutionInstanceModule.
     * @example
     * // Create one InstitutionInstanceModule
     * const InstitutionInstanceModule = await prisma.institutionInstanceModule.create({
     *   data: {
     *     // ... data to create a InstitutionInstanceModule
     *   }
     * })
     * 
     */
    create<T extends InstitutionInstanceModuleCreateArgs>(args: SelectSubset<T, InstitutionInstanceModuleCreateArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleClient<$Result.GetResult<Prisma.$InstitutionInstanceModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstitutionInstanceModules.
     * @param {InstitutionInstanceModuleCreateManyArgs} args - Arguments to create many InstitutionInstanceModules.
     * @example
     * // Create many InstitutionInstanceModules
     * const institutionInstanceModule = await prisma.institutionInstanceModule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstitutionInstanceModuleCreateManyArgs>(args?: SelectSubset<T, InstitutionInstanceModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstitutionInstanceModules and returns the data saved in the database.
     * @param {InstitutionInstanceModuleCreateManyAndReturnArgs} args - Arguments to create many InstitutionInstanceModules.
     * @example
     * // Create many InstitutionInstanceModules
     * const institutionInstanceModule = await prisma.institutionInstanceModule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstitutionInstanceModules and only return the `id`
     * const institutionInstanceModuleWithIdOnly = await prisma.institutionInstanceModule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstitutionInstanceModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, InstitutionInstanceModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionInstanceModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstitutionInstanceModule.
     * @param {InstitutionInstanceModuleDeleteArgs} args - Arguments to delete one InstitutionInstanceModule.
     * @example
     * // Delete one InstitutionInstanceModule
     * const InstitutionInstanceModule = await prisma.institutionInstanceModule.delete({
     *   where: {
     *     // ... filter to delete one InstitutionInstanceModule
     *   }
     * })
     * 
     */
    delete<T extends InstitutionInstanceModuleDeleteArgs>(args: SelectSubset<T, InstitutionInstanceModuleDeleteArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleClient<$Result.GetResult<Prisma.$InstitutionInstanceModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstitutionInstanceModule.
     * @param {InstitutionInstanceModuleUpdateArgs} args - Arguments to update one InstitutionInstanceModule.
     * @example
     * // Update one InstitutionInstanceModule
     * const institutionInstanceModule = await prisma.institutionInstanceModule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstitutionInstanceModuleUpdateArgs>(args: SelectSubset<T, InstitutionInstanceModuleUpdateArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleClient<$Result.GetResult<Prisma.$InstitutionInstanceModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstitutionInstanceModules.
     * @param {InstitutionInstanceModuleDeleteManyArgs} args - Arguments to filter InstitutionInstanceModules to delete.
     * @example
     * // Delete a few InstitutionInstanceModules
     * const { count } = await prisma.institutionInstanceModule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstitutionInstanceModuleDeleteManyArgs>(args?: SelectSubset<T, InstitutionInstanceModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstitutionInstanceModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstitutionInstanceModules
     * const institutionInstanceModule = await prisma.institutionInstanceModule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstitutionInstanceModuleUpdateManyArgs>(args: SelectSubset<T, InstitutionInstanceModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstitutionInstanceModules and returns the data updated in the database.
     * @param {InstitutionInstanceModuleUpdateManyAndReturnArgs} args - Arguments to update many InstitutionInstanceModules.
     * @example
     * // Update many InstitutionInstanceModules
     * const institutionInstanceModule = await prisma.institutionInstanceModule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstitutionInstanceModules and only return the `id`
     * const institutionInstanceModuleWithIdOnly = await prisma.institutionInstanceModule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstitutionInstanceModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, InstitutionInstanceModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionInstanceModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstitutionInstanceModule.
     * @param {InstitutionInstanceModuleUpsertArgs} args - Arguments to update or create a InstitutionInstanceModule.
     * @example
     * // Update or create a InstitutionInstanceModule
     * const institutionInstanceModule = await prisma.institutionInstanceModule.upsert({
     *   create: {
     *     // ... data to create a InstitutionInstanceModule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstitutionInstanceModule we want to update
     *   }
     * })
     */
    upsert<T extends InstitutionInstanceModuleUpsertArgs>(args: SelectSubset<T, InstitutionInstanceModuleUpsertArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleClient<$Result.GetResult<Prisma.$InstitutionInstanceModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstitutionInstanceModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceModuleCountArgs} args - Arguments to filter InstitutionInstanceModules to count.
     * @example
     * // Count the number of InstitutionInstanceModules
     * const count = await prisma.institutionInstanceModule.count({
     *   where: {
     *     // ... the filter for the InstitutionInstanceModules we want to count
     *   }
     * })
    **/
    count<T extends InstitutionInstanceModuleCountArgs>(
      args?: Subset<T, InstitutionInstanceModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionInstanceModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstitutionInstanceModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstitutionInstanceModuleAggregateArgs>(args: Subset<T, InstitutionInstanceModuleAggregateArgs>): Prisma.PrismaPromise<GetInstitutionInstanceModuleAggregateType<T>>

    /**
     * Group by InstitutionInstanceModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceModuleGroupByArgs} args - Group by arguments.
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
      T extends InstitutionInstanceModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstitutionInstanceModuleGroupByArgs['orderBy'] }
        : { orderBy?: InstitutionInstanceModuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstitutionInstanceModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionInstanceModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstitutionInstanceModule model
   */
  readonly fields: InstitutionInstanceModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstitutionInstanceModule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstitutionInstanceModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instance<T extends InstitutionInstanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionInstanceDefaultArgs<ExtArgs>>): Prisma__InstitutionInstanceClient<$Result.GetResult<Prisma.$InstitutionInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends InstitutionInstanceModuleTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionInstanceModuleTypeDefaultArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleTypeClient<$Result.GetResult<Prisma.$InstitutionInstanceModuleTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InstitutionInstanceModule model
   */
  interface InstitutionInstanceModuleFieldRefs {
    readonly id: FieldRef<"InstitutionInstanceModule", 'String'>
    readonly createdAt: FieldRef<"InstitutionInstanceModule", 'DateTime'>
    readonly updatedAt: FieldRef<"InstitutionInstanceModule", 'DateTime'>
    readonly baseURL: FieldRef<"InstitutionInstanceModule", 'String'>
    readonly isEnabled: FieldRef<"InstitutionInstanceModule", 'Boolean'>
    readonly status: FieldRef<"InstitutionInstanceModule", 'String'>
    readonly apiKey: FieldRef<"InstitutionInstanceModule", 'String'>
    readonly expectedMajorVersion: FieldRef<"InstitutionInstanceModule", 'Int'>
    readonly expectedMinorVersion: FieldRef<"InstitutionInstanceModule", 'Int'>
    readonly instanceId: FieldRef<"InstitutionInstanceModule", 'String'>
    readonly typeId: FieldRef<"InstitutionInstanceModule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InstitutionInstanceModule findUnique
   */
  export type InstitutionInstanceModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModule
     */
    select?: InstitutionInstanceModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModule
     */
    omit?: InstitutionInstanceModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionInstanceModule to fetch.
     */
    where: InstitutionInstanceModuleWhereUniqueInput
  }

  /**
   * InstitutionInstanceModule findUniqueOrThrow
   */
  export type InstitutionInstanceModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModule
     */
    select?: InstitutionInstanceModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModule
     */
    omit?: InstitutionInstanceModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionInstanceModule to fetch.
     */
    where: InstitutionInstanceModuleWhereUniqueInput
  }

  /**
   * InstitutionInstanceModule findFirst
   */
  export type InstitutionInstanceModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModule
     */
    select?: InstitutionInstanceModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModule
     */
    omit?: InstitutionInstanceModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionInstanceModule to fetch.
     */
    where?: InstitutionInstanceModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionInstanceModules to fetch.
     */
    orderBy?: InstitutionInstanceModuleOrderByWithRelationInput | InstitutionInstanceModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstitutionInstanceModules.
     */
    cursor?: InstitutionInstanceModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionInstanceModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionInstanceModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstitutionInstanceModules.
     */
    distinct?: InstitutionInstanceModuleScalarFieldEnum | InstitutionInstanceModuleScalarFieldEnum[]
  }

  /**
   * InstitutionInstanceModule findFirstOrThrow
   */
  export type InstitutionInstanceModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModule
     */
    select?: InstitutionInstanceModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModule
     */
    omit?: InstitutionInstanceModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionInstanceModule to fetch.
     */
    where?: InstitutionInstanceModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionInstanceModules to fetch.
     */
    orderBy?: InstitutionInstanceModuleOrderByWithRelationInput | InstitutionInstanceModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstitutionInstanceModules.
     */
    cursor?: InstitutionInstanceModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionInstanceModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionInstanceModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstitutionInstanceModules.
     */
    distinct?: InstitutionInstanceModuleScalarFieldEnum | InstitutionInstanceModuleScalarFieldEnum[]
  }

  /**
   * InstitutionInstanceModule findMany
   */
  export type InstitutionInstanceModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModule
     */
    select?: InstitutionInstanceModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModule
     */
    omit?: InstitutionInstanceModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionInstanceModules to fetch.
     */
    where?: InstitutionInstanceModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionInstanceModules to fetch.
     */
    orderBy?: InstitutionInstanceModuleOrderByWithRelationInput | InstitutionInstanceModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstitutionInstanceModules.
     */
    cursor?: InstitutionInstanceModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionInstanceModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionInstanceModules.
     */
    skip?: number
    distinct?: InstitutionInstanceModuleScalarFieldEnum | InstitutionInstanceModuleScalarFieldEnum[]
  }

  /**
   * InstitutionInstanceModule create
   */
  export type InstitutionInstanceModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModule
     */
    select?: InstitutionInstanceModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModule
     */
    omit?: InstitutionInstanceModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a InstitutionInstanceModule.
     */
    data: XOR<InstitutionInstanceModuleCreateInput, InstitutionInstanceModuleUncheckedCreateInput>
  }

  /**
   * InstitutionInstanceModule createMany
   */
  export type InstitutionInstanceModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstitutionInstanceModules.
     */
    data: InstitutionInstanceModuleCreateManyInput | InstitutionInstanceModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstitutionInstanceModule createManyAndReturn
   */
  export type InstitutionInstanceModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModule
     */
    select?: InstitutionInstanceModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModule
     */
    omit?: InstitutionInstanceModuleOmit<ExtArgs> | null
    /**
     * The data used to create many InstitutionInstanceModules.
     */
    data: InstitutionInstanceModuleCreateManyInput | InstitutionInstanceModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstitutionInstanceModule update
   */
  export type InstitutionInstanceModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModule
     */
    select?: InstitutionInstanceModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModule
     */
    omit?: InstitutionInstanceModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a InstitutionInstanceModule.
     */
    data: XOR<InstitutionInstanceModuleUpdateInput, InstitutionInstanceModuleUncheckedUpdateInput>
    /**
     * Choose, which InstitutionInstanceModule to update.
     */
    where: InstitutionInstanceModuleWhereUniqueInput
  }

  /**
   * InstitutionInstanceModule updateMany
   */
  export type InstitutionInstanceModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstitutionInstanceModules.
     */
    data: XOR<InstitutionInstanceModuleUpdateManyMutationInput, InstitutionInstanceModuleUncheckedUpdateManyInput>
    /**
     * Filter which InstitutionInstanceModules to update
     */
    where?: InstitutionInstanceModuleWhereInput
    /**
     * Limit how many InstitutionInstanceModules to update.
     */
    limit?: number
  }

  /**
   * InstitutionInstanceModule updateManyAndReturn
   */
  export type InstitutionInstanceModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModule
     */
    select?: InstitutionInstanceModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModule
     */
    omit?: InstitutionInstanceModuleOmit<ExtArgs> | null
    /**
     * The data used to update InstitutionInstanceModules.
     */
    data: XOR<InstitutionInstanceModuleUpdateManyMutationInput, InstitutionInstanceModuleUncheckedUpdateManyInput>
    /**
     * Filter which InstitutionInstanceModules to update
     */
    where?: InstitutionInstanceModuleWhereInput
    /**
     * Limit how many InstitutionInstanceModules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstitutionInstanceModule upsert
   */
  export type InstitutionInstanceModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModule
     */
    select?: InstitutionInstanceModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModule
     */
    omit?: InstitutionInstanceModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the InstitutionInstanceModule to update in case it exists.
     */
    where: InstitutionInstanceModuleWhereUniqueInput
    /**
     * In case the InstitutionInstanceModule found by the `where` argument doesn't exist, create a new InstitutionInstanceModule with this data.
     */
    create: XOR<InstitutionInstanceModuleCreateInput, InstitutionInstanceModuleUncheckedCreateInput>
    /**
     * In case the InstitutionInstanceModule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstitutionInstanceModuleUpdateInput, InstitutionInstanceModuleUncheckedUpdateInput>
  }

  /**
   * InstitutionInstanceModule delete
   */
  export type InstitutionInstanceModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModule
     */
    select?: InstitutionInstanceModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModule
     */
    omit?: InstitutionInstanceModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleInclude<ExtArgs> | null
    /**
     * Filter which InstitutionInstanceModule to delete.
     */
    where: InstitutionInstanceModuleWhereUniqueInput
  }

  /**
   * InstitutionInstanceModule deleteMany
   */
  export type InstitutionInstanceModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstitutionInstanceModules to delete
     */
    where?: InstitutionInstanceModuleWhereInput
    /**
     * Limit how many InstitutionInstanceModules to delete.
     */
    limit?: number
  }

  /**
   * InstitutionInstanceModule without action
   */
  export type InstitutionInstanceModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModule
     */
    select?: InstitutionInstanceModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModule
     */
    omit?: InstitutionInstanceModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleInclude<ExtArgs> | null
  }


  /**
   * Model InstitutionInstanceModuleType
   */

  export type AggregateInstitutionInstanceModuleType = {
    _count: InstitutionInstanceModuleTypeCountAggregateOutputType | null
    _min: InstitutionInstanceModuleTypeMinAggregateOutputType | null
    _max: InstitutionInstanceModuleTypeMaxAggregateOutputType | null
  }

  export type InstitutionInstanceModuleTypeMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
  }

  export type InstitutionInstanceModuleTypeMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
  }

  export type InstitutionInstanceModuleTypeCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    _all: number
  }


  export type InstitutionInstanceModuleTypeMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
  }

  export type InstitutionInstanceModuleTypeMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
  }

  export type InstitutionInstanceModuleTypeCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    _all?: true
  }

  export type InstitutionInstanceModuleTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstitutionInstanceModuleType to aggregate.
     */
    where?: InstitutionInstanceModuleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionInstanceModuleTypes to fetch.
     */
    orderBy?: InstitutionInstanceModuleTypeOrderByWithRelationInput | InstitutionInstanceModuleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstitutionInstanceModuleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionInstanceModuleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionInstanceModuleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstitutionInstanceModuleTypes
    **/
    _count?: true | InstitutionInstanceModuleTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstitutionInstanceModuleTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstitutionInstanceModuleTypeMaxAggregateInputType
  }

  export type GetInstitutionInstanceModuleTypeAggregateType<T extends InstitutionInstanceModuleTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitutionInstanceModuleType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitutionInstanceModuleType[P]>
      : GetScalarType<T[P], AggregateInstitutionInstanceModuleType[P]>
  }




  export type InstitutionInstanceModuleTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionInstanceModuleTypeWhereInput
    orderBy?: InstitutionInstanceModuleTypeOrderByWithAggregationInput | InstitutionInstanceModuleTypeOrderByWithAggregationInput[]
    by: InstitutionInstanceModuleTypeScalarFieldEnum[] | InstitutionInstanceModuleTypeScalarFieldEnum
    having?: InstitutionInstanceModuleTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstitutionInstanceModuleTypeCountAggregateInputType | true
    _min?: InstitutionInstanceModuleTypeMinAggregateInputType
    _max?: InstitutionInstanceModuleTypeMaxAggregateInputType
  }

  export type InstitutionInstanceModuleTypeGroupByOutputType = {
    id: string
    slug: string
    name: string
    _count: InstitutionInstanceModuleTypeCountAggregateOutputType | null
    _min: InstitutionInstanceModuleTypeMinAggregateOutputType | null
    _max: InstitutionInstanceModuleTypeMaxAggregateOutputType | null
  }

  type GetInstitutionInstanceModuleTypeGroupByPayload<T extends InstitutionInstanceModuleTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionInstanceModuleTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstitutionInstanceModuleTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstitutionInstanceModuleTypeGroupByOutputType[P]>
            : GetScalarType<T[P], InstitutionInstanceModuleTypeGroupByOutputType[P]>
        }
      >
    >


  export type InstitutionInstanceModuleTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    InstitutionInstanceModule?: boolean | InstitutionInstanceModuleType$InstitutionInstanceModuleArgs<ExtArgs>
    _count?: boolean | InstitutionInstanceModuleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institutionInstanceModuleType"]>

  export type InstitutionInstanceModuleTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
  }, ExtArgs["result"]["institutionInstanceModuleType"]>

  export type InstitutionInstanceModuleTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
  }, ExtArgs["result"]["institutionInstanceModuleType"]>

  export type InstitutionInstanceModuleTypeSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
  }

  export type InstitutionInstanceModuleTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name", ExtArgs["result"]["institutionInstanceModuleType"]>
  export type InstitutionInstanceModuleTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InstitutionInstanceModule?: boolean | InstitutionInstanceModuleType$InstitutionInstanceModuleArgs<ExtArgs>
    _count?: boolean | InstitutionInstanceModuleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstitutionInstanceModuleTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstitutionInstanceModuleTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstitutionInstanceModuleTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstitutionInstanceModuleType"
    objects: {
      InstitutionInstanceModule: Prisma.$InstitutionInstanceModulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
    }, ExtArgs["result"]["institutionInstanceModuleType"]>
    composites: {}
  }

  type InstitutionInstanceModuleTypeGetPayload<S extends boolean | null | undefined | InstitutionInstanceModuleTypeDefaultArgs> = $Result.GetResult<Prisma.$InstitutionInstanceModuleTypePayload, S>

  type InstitutionInstanceModuleTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstitutionInstanceModuleTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstitutionInstanceModuleTypeCountAggregateInputType | true
    }

  export interface InstitutionInstanceModuleTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstitutionInstanceModuleType'], meta: { name: 'InstitutionInstanceModuleType' } }
    /**
     * Find zero or one InstitutionInstanceModuleType that matches the filter.
     * @param {InstitutionInstanceModuleTypeFindUniqueArgs} args - Arguments to find a InstitutionInstanceModuleType
     * @example
     * // Get one InstitutionInstanceModuleType
     * const institutionInstanceModuleType = await prisma.institutionInstanceModuleType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstitutionInstanceModuleTypeFindUniqueArgs>(args: SelectSubset<T, InstitutionInstanceModuleTypeFindUniqueArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleTypeClient<$Result.GetResult<Prisma.$InstitutionInstanceModuleTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstitutionInstanceModuleType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstitutionInstanceModuleTypeFindUniqueOrThrowArgs} args - Arguments to find a InstitutionInstanceModuleType
     * @example
     * // Get one InstitutionInstanceModuleType
     * const institutionInstanceModuleType = await prisma.institutionInstanceModuleType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstitutionInstanceModuleTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, InstitutionInstanceModuleTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleTypeClient<$Result.GetResult<Prisma.$InstitutionInstanceModuleTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstitutionInstanceModuleType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceModuleTypeFindFirstArgs} args - Arguments to find a InstitutionInstanceModuleType
     * @example
     * // Get one InstitutionInstanceModuleType
     * const institutionInstanceModuleType = await prisma.institutionInstanceModuleType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstitutionInstanceModuleTypeFindFirstArgs>(args?: SelectSubset<T, InstitutionInstanceModuleTypeFindFirstArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleTypeClient<$Result.GetResult<Prisma.$InstitutionInstanceModuleTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstitutionInstanceModuleType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceModuleTypeFindFirstOrThrowArgs} args - Arguments to find a InstitutionInstanceModuleType
     * @example
     * // Get one InstitutionInstanceModuleType
     * const institutionInstanceModuleType = await prisma.institutionInstanceModuleType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstitutionInstanceModuleTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, InstitutionInstanceModuleTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleTypeClient<$Result.GetResult<Prisma.$InstitutionInstanceModuleTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstitutionInstanceModuleTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceModuleTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstitutionInstanceModuleTypes
     * const institutionInstanceModuleTypes = await prisma.institutionInstanceModuleType.findMany()
     * 
     * // Get first 10 InstitutionInstanceModuleTypes
     * const institutionInstanceModuleTypes = await prisma.institutionInstanceModuleType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const institutionInstanceModuleTypeWithIdOnly = await prisma.institutionInstanceModuleType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstitutionInstanceModuleTypeFindManyArgs>(args?: SelectSubset<T, InstitutionInstanceModuleTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionInstanceModuleTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstitutionInstanceModuleType.
     * @param {InstitutionInstanceModuleTypeCreateArgs} args - Arguments to create a InstitutionInstanceModuleType.
     * @example
     * // Create one InstitutionInstanceModuleType
     * const InstitutionInstanceModuleType = await prisma.institutionInstanceModuleType.create({
     *   data: {
     *     // ... data to create a InstitutionInstanceModuleType
     *   }
     * })
     * 
     */
    create<T extends InstitutionInstanceModuleTypeCreateArgs>(args: SelectSubset<T, InstitutionInstanceModuleTypeCreateArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleTypeClient<$Result.GetResult<Prisma.$InstitutionInstanceModuleTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstitutionInstanceModuleTypes.
     * @param {InstitutionInstanceModuleTypeCreateManyArgs} args - Arguments to create many InstitutionInstanceModuleTypes.
     * @example
     * // Create many InstitutionInstanceModuleTypes
     * const institutionInstanceModuleType = await prisma.institutionInstanceModuleType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstitutionInstanceModuleTypeCreateManyArgs>(args?: SelectSubset<T, InstitutionInstanceModuleTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstitutionInstanceModuleTypes and returns the data saved in the database.
     * @param {InstitutionInstanceModuleTypeCreateManyAndReturnArgs} args - Arguments to create many InstitutionInstanceModuleTypes.
     * @example
     * // Create many InstitutionInstanceModuleTypes
     * const institutionInstanceModuleType = await prisma.institutionInstanceModuleType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstitutionInstanceModuleTypes and only return the `id`
     * const institutionInstanceModuleTypeWithIdOnly = await prisma.institutionInstanceModuleType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstitutionInstanceModuleTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, InstitutionInstanceModuleTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionInstanceModuleTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstitutionInstanceModuleType.
     * @param {InstitutionInstanceModuleTypeDeleteArgs} args - Arguments to delete one InstitutionInstanceModuleType.
     * @example
     * // Delete one InstitutionInstanceModuleType
     * const InstitutionInstanceModuleType = await prisma.institutionInstanceModuleType.delete({
     *   where: {
     *     // ... filter to delete one InstitutionInstanceModuleType
     *   }
     * })
     * 
     */
    delete<T extends InstitutionInstanceModuleTypeDeleteArgs>(args: SelectSubset<T, InstitutionInstanceModuleTypeDeleteArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleTypeClient<$Result.GetResult<Prisma.$InstitutionInstanceModuleTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstitutionInstanceModuleType.
     * @param {InstitutionInstanceModuleTypeUpdateArgs} args - Arguments to update one InstitutionInstanceModuleType.
     * @example
     * // Update one InstitutionInstanceModuleType
     * const institutionInstanceModuleType = await prisma.institutionInstanceModuleType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstitutionInstanceModuleTypeUpdateArgs>(args: SelectSubset<T, InstitutionInstanceModuleTypeUpdateArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleTypeClient<$Result.GetResult<Prisma.$InstitutionInstanceModuleTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstitutionInstanceModuleTypes.
     * @param {InstitutionInstanceModuleTypeDeleteManyArgs} args - Arguments to filter InstitutionInstanceModuleTypes to delete.
     * @example
     * // Delete a few InstitutionInstanceModuleTypes
     * const { count } = await prisma.institutionInstanceModuleType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstitutionInstanceModuleTypeDeleteManyArgs>(args?: SelectSubset<T, InstitutionInstanceModuleTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstitutionInstanceModuleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceModuleTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstitutionInstanceModuleTypes
     * const institutionInstanceModuleType = await prisma.institutionInstanceModuleType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstitutionInstanceModuleTypeUpdateManyArgs>(args: SelectSubset<T, InstitutionInstanceModuleTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstitutionInstanceModuleTypes and returns the data updated in the database.
     * @param {InstitutionInstanceModuleTypeUpdateManyAndReturnArgs} args - Arguments to update many InstitutionInstanceModuleTypes.
     * @example
     * // Update many InstitutionInstanceModuleTypes
     * const institutionInstanceModuleType = await prisma.institutionInstanceModuleType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstitutionInstanceModuleTypes and only return the `id`
     * const institutionInstanceModuleTypeWithIdOnly = await prisma.institutionInstanceModuleType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstitutionInstanceModuleTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, InstitutionInstanceModuleTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionInstanceModuleTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstitutionInstanceModuleType.
     * @param {InstitutionInstanceModuleTypeUpsertArgs} args - Arguments to update or create a InstitutionInstanceModuleType.
     * @example
     * // Update or create a InstitutionInstanceModuleType
     * const institutionInstanceModuleType = await prisma.institutionInstanceModuleType.upsert({
     *   create: {
     *     // ... data to create a InstitutionInstanceModuleType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstitutionInstanceModuleType we want to update
     *   }
     * })
     */
    upsert<T extends InstitutionInstanceModuleTypeUpsertArgs>(args: SelectSubset<T, InstitutionInstanceModuleTypeUpsertArgs<ExtArgs>>): Prisma__InstitutionInstanceModuleTypeClient<$Result.GetResult<Prisma.$InstitutionInstanceModuleTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstitutionInstanceModuleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceModuleTypeCountArgs} args - Arguments to filter InstitutionInstanceModuleTypes to count.
     * @example
     * // Count the number of InstitutionInstanceModuleTypes
     * const count = await prisma.institutionInstanceModuleType.count({
     *   where: {
     *     // ... the filter for the InstitutionInstanceModuleTypes we want to count
     *   }
     * })
    **/
    count<T extends InstitutionInstanceModuleTypeCountArgs>(
      args?: Subset<T, InstitutionInstanceModuleTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionInstanceModuleTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstitutionInstanceModuleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceModuleTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstitutionInstanceModuleTypeAggregateArgs>(args: Subset<T, InstitutionInstanceModuleTypeAggregateArgs>): Prisma.PrismaPromise<GetInstitutionInstanceModuleTypeAggregateType<T>>

    /**
     * Group by InstitutionInstanceModuleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionInstanceModuleTypeGroupByArgs} args - Group by arguments.
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
      T extends InstitutionInstanceModuleTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstitutionInstanceModuleTypeGroupByArgs['orderBy'] }
        : { orderBy?: InstitutionInstanceModuleTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstitutionInstanceModuleTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionInstanceModuleTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstitutionInstanceModuleType model
   */
  readonly fields: InstitutionInstanceModuleTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstitutionInstanceModuleType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstitutionInstanceModuleTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    InstitutionInstanceModule<T extends InstitutionInstanceModuleType$InstitutionInstanceModuleArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionInstanceModuleType$InstitutionInstanceModuleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionInstanceModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the InstitutionInstanceModuleType model
   */
  interface InstitutionInstanceModuleTypeFieldRefs {
    readonly id: FieldRef<"InstitutionInstanceModuleType", 'String'>
    readonly slug: FieldRef<"InstitutionInstanceModuleType", 'String'>
    readonly name: FieldRef<"InstitutionInstanceModuleType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InstitutionInstanceModuleType findUnique
   */
  export type InstitutionInstanceModuleTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModuleType
     */
    select?: InstitutionInstanceModuleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModuleType
     */
    omit?: InstitutionInstanceModuleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleTypeInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionInstanceModuleType to fetch.
     */
    where: InstitutionInstanceModuleTypeWhereUniqueInput
  }

  /**
   * InstitutionInstanceModuleType findUniqueOrThrow
   */
  export type InstitutionInstanceModuleTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModuleType
     */
    select?: InstitutionInstanceModuleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModuleType
     */
    omit?: InstitutionInstanceModuleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleTypeInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionInstanceModuleType to fetch.
     */
    where: InstitutionInstanceModuleTypeWhereUniqueInput
  }

  /**
   * InstitutionInstanceModuleType findFirst
   */
  export type InstitutionInstanceModuleTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModuleType
     */
    select?: InstitutionInstanceModuleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModuleType
     */
    omit?: InstitutionInstanceModuleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleTypeInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionInstanceModuleType to fetch.
     */
    where?: InstitutionInstanceModuleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionInstanceModuleTypes to fetch.
     */
    orderBy?: InstitutionInstanceModuleTypeOrderByWithRelationInput | InstitutionInstanceModuleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstitutionInstanceModuleTypes.
     */
    cursor?: InstitutionInstanceModuleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionInstanceModuleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionInstanceModuleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstitutionInstanceModuleTypes.
     */
    distinct?: InstitutionInstanceModuleTypeScalarFieldEnum | InstitutionInstanceModuleTypeScalarFieldEnum[]
  }

  /**
   * InstitutionInstanceModuleType findFirstOrThrow
   */
  export type InstitutionInstanceModuleTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModuleType
     */
    select?: InstitutionInstanceModuleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModuleType
     */
    omit?: InstitutionInstanceModuleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleTypeInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionInstanceModuleType to fetch.
     */
    where?: InstitutionInstanceModuleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionInstanceModuleTypes to fetch.
     */
    orderBy?: InstitutionInstanceModuleTypeOrderByWithRelationInput | InstitutionInstanceModuleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstitutionInstanceModuleTypes.
     */
    cursor?: InstitutionInstanceModuleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionInstanceModuleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionInstanceModuleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstitutionInstanceModuleTypes.
     */
    distinct?: InstitutionInstanceModuleTypeScalarFieldEnum | InstitutionInstanceModuleTypeScalarFieldEnum[]
  }

  /**
   * InstitutionInstanceModuleType findMany
   */
  export type InstitutionInstanceModuleTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModuleType
     */
    select?: InstitutionInstanceModuleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModuleType
     */
    omit?: InstitutionInstanceModuleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleTypeInclude<ExtArgs> | null
    /**
     * Filter, which InstitutionInstanceModuleTypes to fetch.
     */
    where?: InstitutionInstanceModuleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstitutionInstanceModuleTypes to fetch.
     */
    orderBy?: InstitutionInstanceModuleTypeOrderByWithRelationInput | InstitutionInstanceModuleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstitutionInstanceModuleTypes.
     */
    cursor?: InstitutionInstanceModuleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstitutionInstanceModuleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstitutionInstanceModuleTypes.
     */
    skip?: number
    distinct?: InstitutionInstanceModuleTypeScalarFieldEnum | InstitutionInstanceModuleTypeScalarFieldEnum[]
  }

  /**
   * InstitutionInstanceModuleType create
   */
  export type InstitutionInstanceModuleTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModuleType
     */
    select?: InstitutionInstanceModuleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModuleType
     */
    omit?: InstitutionInstanceModuleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a InstitutionInstanceModuleType.
     */
    data: XOR<InstitutionInstanceModuleTypeCreateInput, InstitutionInstanceModuleTypeUncheckedCreateInput>
  }

  /**
   * InstitutionInstanceModuleType createMany
   */
  export type InstitutionInstanceModuleTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstitutionInstanceModuleTypes.
     */
    data: InstitutionInstanceModuleTypeCreateManyInput | InstitutionInstanceModuleTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstitutionInstanceModuleType createManyAndReturn
   */
  export type InstitutionInstanceModuleTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModuleType
     */
    select?: InstitutionInstanceModuleTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModuleType
     */
    omit?: InstitutionInstanceModuleTypeOmit<ExtArgs> | null
    /**
     * The data used to create many InstitutionInstanceModuleTypes.
     */
    data: InstitutionInstanceModuleTypeCreateManyInput | InstitutionInstanceModuleTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstitutionInstanceModuleType update
   */
  export type InstitutionInstanceModuleTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModuleType
     */
    select?: InstitutionInstanceModuleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModuleType
     */
    omit?: InstitutionInstanceModuleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a InstitutionInstanceModuleType.
     */
    data: XOR<InstitutionInstanceModuleTypeUpdateInput, InstitutionInstanceModuleTypeUncheckedUpdateInput>
    /**
     * Choose, which InstitutionInstanceModuleType to update.
     */
    where: InstitutionInstanceModuleTypeWhereUniqueInput
  }

  /**
   * InstitutionInstanceModuleType updateMany
   */
  export type InstitutionInstanceModuleTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstitutionInstanceModuleTypes.
     */
    data: XOR<InstitutionInstanceModuleTypeUpdateManyMutationInput, InstitutionInstanceModuleTypeUncheckedUpdateManyInput>
    /**
     * Filter which InstitutionInstanceModuleTypes to update
     */
    where?: InstitutionInstanceModuleTypeWhereInput
    /**
     * Limit how many InstitutionInstanceModuleTypes to update.
     */
    limit?: number
  }

  /**
   * InstitutionInstanceModuleType updateManyAndReturn
   */
  export type InstitutionInstanceModuleTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModuleType
     */
    select?: InstitutionInstanceModuleTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModuleType
     */
    omit?: InstitutionInstanceModuleTypeOmit<ExtArgs> | null
    /**
     * The data used to update InstitutionInstanceModuleTypes.
     */
    data: XOR<InstitutionInstanceModuleTypeUpdateManyMutationInput, InstitutionInstanceModuleTypeUncheckedUpdateManyInput>
    /**
     * Filter which InstitutionInstanceModuleTypes to update
     */
    where?: InstitutionInstanceModuleTypeWhereInput
    /**
     * Limit how many InstitutionInstanceModuleTypes to update.
     */
    limit?: number
  }

  /**
   * InstitutionInstanceModuleType upsert
   */
  export type InstitutionInstanceModuleTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModuleType
     */
    select?: InstitutionInstanceModuleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModuleType
     */
    omit?: InstitutionInstanceModuleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the InstitutionInstanceModuleType to update in case it exists.
     */
    where: InstitutionInstanceModuleTypeWhereUniqueInput
    /**
     * In case the InstitutionInstanceModuleType found by the `where` argument doesn't exist, create a new InstitutionInstanceModuleType with this data.
     */
    create: XOR<InstitutionInstanceModuleTypeCreateInput, InstitutionInstanceModuleTypeUncheckedCreateInput>
    /**
     * In case the InstitutionInstanceModuleType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstitutionInstanceModuleTypeUpdateInput, InstitutionInstanceModuleTypeUncheckedUpdateInput>
  }

  /**
   * InstitutionInstanceModuleType delete
   */
  export type InstitutionInstanceModuleTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModuleType
     */
    select?: InstitutionInstanceModuleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModuleType
     */
    omit?: InstitutionInstanceModuleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleTypeInclude<ExtArgs> | null
    /**
     * Filter which InstitutionInstanceModuleType to delete.
     */
    where: InstitutionInstanceModuleTypeWhereUniqueInput
  }

  /**
   * InstitutionInstanceModuleType deleteMany
   */
  export type InstitutionInstanceModuleTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstitutionInstanceModuleTypes to delete
     */
    where?: InstitutionInstanceModuleTypeWhereInput
    /**
     * Limit how many InstitutionInstanceModuleTypes to delete.
     */
    limit?: number
  }

  /**
   * InstitutionInstanceModuleType.InstitutionInstanceModule
   */
  export type InstitutionInstanceModuleType$InstitutionInstanceModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModule
     */
    select?: InstitutionInstanceModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModule
     */
    omit?: InstitutionInstanceModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleInclude<ExtArgs> | null
    where?: InstitutionInstanceModuleWhereInput
    orderBy?: InstitutionInstanceModuleOrderByWithRelationInput | InstitutionInstanceModuleOrderByWithRelationInput[]
    cursor?: InstitutionInstanceModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstitutionInstanceModuleScalarFieldEnum | InstitutionInstanceModuleScalarFieldEnum[]
  }

  /**
   * InstitutionInstanceModuleType without action
   */
  export type InstitutionInstanceModuleTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionInstanceModuleType
     */
    select?: InstitutionInstanceModuleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstitutionInstanceModuleType
     */
    omit?: InstitutionInstanceModuleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInstanceModuleTypeInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    passwordHash: 'passwordHash',
    roleId: 'roleId',
    instanceId: 'instanceId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const EmailScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type EmailScalarFieldEnum = (typeof EmailScalarFieldEnum)[keyof typeof EmailScalarFieldEnum]


  export const ExternalLinksScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    url: 'url',
    name: 'name',
    emoji: 'emoji',
    scope: 'scope',
    institutionInstanceId: 'institutionInstanceId'
  };

  export type ExternalLinksScalarFieldEnum = (typeof ExternalLinksScalarFieldEnum)[keyof typeof ExternalLinksScalarFieldEnum]


  export const ArticlesScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    content: 'content',
    isPublished: 'isPublished',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticlesScalarFieldEnum = (typeof ArticlesScalarFieldEnum)[keyof typeof ArticlesScalarFieldEnum]


  export const InstitutionInstanceScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    institutionName: 'institutionName',
    institutionSlug: 'institutionSlug'
  };

  export type InstitutionInstanceScalarFieldEnum = (typeof InstitutionInstanceScalarFieldEnum)[keyof typeof InstitutionInstanceScalarFieldEnum]


  export const InstitutionInstanceModuleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    baseURL: 'baseURL',
    isEnabled: 'isEnabled',
    status: 'status',
    apiKey: 'apiKey',
    expectedMajorVersion: 'expectedMajorVersion',
    expectedMinorVersion: 'expectedMinorVersion',
    instanceId: 'instanceId',
    typeId: 'typeId'
  };

  export type InstitutionInstanceModuleScalarFieldEnum = (typeof InstitutionInstanceModuleScalarFieldEnum)[keyof typeof InstitutionInstanceModuleScalarFieldEnum]


  export const InstitutionInstanceModuleTypeScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name'
  };

  export type InstitutionInstanceModuleTypeScalarFieldEnum = (typeof InstitutionInstanceModuleTypeScalarFieldEnum)[keyof typeof InstitutionInstanceModuleTypeScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ExternalLinkScope'
   */
  export type EnumExternalLinkScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExternalLinkScope'>
    


  /**
   * Reference to a field of type 'ExternalLinkScope[]'
   */
  export type ListEnumExternalLinkScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExternalLinkScope[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    passwordHash?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    instanceId?: StringNullableFilter<"User"> | string | null
    emails?: EmailListRelationFilter
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    instance?: XOR<InstitutionInstanceNullableScalarRelationFilter, InstitutionInstanceWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
    roleId?: SortOrder
    instanceId?: SortOrderInput | SortOrder
    emails?: EmailOrderByRelationAggregateInput
    role?: RoleOrderByWithRelationInput
    instance?: InstitutionInstanceOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    passwordHash?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    instanceId?: StringNullableFilter<"User"> | string | null
    emails?: EmailListRelationFilter
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    instance?: XOR<InstitutionInstanceNullableScalarRelationFilter, InstitutionInstanceWhereInput> | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
    roleId?: SortOrder
    instanceId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    roleId?: StringWithAggregatesFilter<"User"> | string
    instanceId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringFilter<"Role"> | string
    User?: UserListRelationFilter
    permissions?: PermissionListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    User?: UserOrderByRelationAggregateInput
    permissions?: PermissionOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    description?: StringFilter<"Role"> | string
    User?: UserListRelationFilter
    permissions?: PermissionListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringWithAggregatesFilter<"Role"> | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: StringFilter<"Permission"> | string
    name?: StringFilter<"Permission"> | string
    description?: StringFilter<"Permission"> | string
    roles?: RoleListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    roles?: RoleOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    name?: StringFilter<"Permission"> | string
    description?: StringFilter<"Permission"> | string
    roles?: RoleListRelationFilter
  }, "id">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permission"> | string
    name?: StringWithAggregatesFilter<"Permission"> | string
    description?: StringWithAggregatesFilter<"Permission"> | string
  }

  export type EmailWhereInput = {
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    id?: StringFilter<"Email"> | string
    email?: StringFilter<"Email"> | string
    createdAt?: DateTimeFilter<"Email"> | Date | string
    updatedAt?: DateTimeFilter<"Email"> | Date | string
    userId?: StringFilter<"Email"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    createdAt?: DateTimeFilter<"Email"> | Date | string
    updatedAt?: DateTimeFilter<"Email"> | Date | string
    userId?: StringFilter<"Email"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "email">

  export type EmailOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: EmailCountOrderByAggregateInput
    _max?: EmailMaxOrderByAggregateInput
    _min?: EmailMinOrderByAggregateInput
  }

  export type EmailScalarWhereWithAggregatesInput = {
    AND?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    OR?: EmailScalarWhereWithAggregatesInput[]
    NOT?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Email"> | string
    email?: StringWithAggregatesFilter<"Email"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Email"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Email"> | Date | string
    userId?: StringWithAggregatesFilter<"Email"> | string
  }

  export type ExternalLinksWhereInput = {
    AND?: ExternalLinksWhereInput | ExternalLinksWhereInput[]
    OR?: ExternalLinksWhereInput[]
    NOT?: ExternalLinksWhereInput | ExternalLinksWhereInput[]
    id?: StringFilter<"ExternalLinks"> | string
    createdAt?: DateTimeFilter<"ExternalLinks"> | Date | string
    updatedAt?: DateTimeFilter<"ExternalLinks"> | Date | string
    url?: StringFilter<"ExternalLinks"> | string
    name?: StringFilter<"ExternalLinks"> | string
    emoji?: StringFilter<"ExternalLinks"> | string
    scope?: EnumExternalLinkScopeFilter<"ExternalLinks"> | $Enums.ExternalLinkScope
    institutionInstanceId?: StringNullableFilter<"ExternalLinks"> | string | null
    institutionInstance?: XOR<InstitutionInstanceNullableScalarRelationFilter, InstitutionInstanceWhereInput> | null
  }

  export type ExternalLinksOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    scope?: SortOrder
    institutionInstanceId?: SortOrderInput | SortOrder
    institutionInstance?: InstitutionInstanceOrderByWithRelationInput
  }

  export type ExternalLinksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExternalLinksWhereInput | ExternalLinksWhereInput[]
    OR?: ExternalLinksWhereInput[]
    NOT?: ExternalLinksWhereInput | ExternalLinksWhereInput[]
    createdAt?: DateTimeFilter<"ExternalLinks"> | Date | string
    updatedAt?: DateTimeFilter<"ExternalLinks"> | Date | string
    url?: StringFilter<"ExternalLinks"> | string
    name?: StringFilter<"ExternalLinks"> | string
    emoji?: StringFilter<"ExternalLinks"> | string
    scope?: EnumExternalLinkScopeFilter<"ExternalLinks"> | $Enums.ExternalLinkScope
    institutionInstanceId?: StringNullableFilter<"ExternalLinks"> | string | null
    institutionInstance?: XOR<InstitutionInstanceNullableScalarRelationFilter, InstitutionInstanceWhereInput> | null
  }, "id">

  export type ExternalLinksOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    scope?: SortOrder
    institutionInstanceId?: SortOrderInput | SortOrder
    _count?: ExternalLinksCountOrderByAggregateInput
    _max?: ExternalLinksMaxOrderByAggregateInput
    _min?: ExternalLinksMinOrderByAggregateInput
  }

  export type ExternalLinksScalarWhereWithAggregatesInput = {
    AND?: ExternalLinksScalarWhereWithAggregatesInput | ExternalLinksScalarWhereWithAggregatesInput[]
    OR?: ExternalLinksScalarWhereWithAggregatesInput[]
    NOT?: ExternalLinksScalarWhereWithAggregatesInput | ExternalLinksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExternalLinks"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExternalLinks"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExternalLinks"> | Date | string
    url?: StringWithAggregatesFilter<"ExternalLinks"> | string
    name?: StringWithAggregatesFilter<"ExternalLinks"> | string
    emoji?: StringWithAggregatesFilter<"ExternalLinks"> | string
    scope?: EnumExternalLinkScopeWithAggregatesFilter<"ExternalLinks"> | $Enums.ExternalLinkScope
    institutionInstanceId?: StringNullableWithAggregatesFilter<"ExternalLinks"> | string | null
  }

  export type ArticlesWhereInput = {
    AND?: ArticlesWhereInput | ArticlesWhereInput[]
    OR?: ArticlesWhereInput[]
    NOT?: ArticlesWhereInput | ArticlesWhereInput[]
    id?: StringFilter<"Articles"> | string
    slug?: StringFilter<"Articles"> | string
    title?: StringFilter<"Articles"> | string
    content?: StringFilter<"Articles"> | string
    isPublished?: BoolFilter<"Articles"> | boolean
    publishedAt?: DateTimeNullableFilter<"Articles"> | Date | string | null
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    updatedAt?: DateTimeFilter<"Articles"> | Date | string
  }

  export type ArticlesOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ArticlesWhereInput | ArticlesWhereInput[]
    OR?: ArticlesWhereInput[]
    NOT?: ArticlesWhereInput | ArticlesWhereInput[]
    title?: StringFilter<"Articles"> | string
    content?: StringFilter<"Articles"> | string
    isPublished?: BoolFilter<"Articles"> | boolean
    publishedAt?: DateTimeNullableFilter<"Articles"> | Date | string | null
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    updatedAt?: DateTimeFilter<"Articles"> | Date | string
  }, "id" | "slug">

  export type ArticlesOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticlesCountOrderByAggregateInput
    _max?: ArticlesMaxOrderByAggregateInput
    _min?: ArticlesMinOrderByAggregateInput
  }

  export type ArticlesScalarWhereWithAggregatesInput = {
    AND?: ArticlesScalarWhereWithAggregatesInput | ArticlesScalarWhereWithAggregatesInput[]
    OR?: ArticlesScalarWhereWithAggregatesInput[]
    NOT?: ArticlesScalarWhereWithAggregatesInput | ArticlesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Articles"> | string
    slug?: StringWithAggregatesFilter<"Articles"> | string
    title?: StringWithAggregatesFilter<"Articles"> | string
    content?: StringWithAggregatesFilter<"Articles"> | string
    isPublished?: BoolWithAggregatesFilter<"Articles"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Articles"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Articles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Articles"> | Date | string
  }

  export type InstitutionInstanceWhereInput = {
    AND?: InstitutionInstanceWhereInput | InstitutionInstanceWhereInput[]
    OR?: InstitutionInstanceWhereInput[]
    NOT?: InstitutionInstanceWhereInput | InstitutionInstanceWhereInput[]
    id?: StringFilter<"InstitutionInstance"> | string
    createdAt?: DateTimeFilter<"InstitutionInstance"> | Date | string
    updatedAt?: DateTimeFilter<"InstitutionInstance"> | Date | string
    institutionName?: StringFilter<"InstitutionInstance"> | string
    institutionSlug?: StringFilter<"InstitutionInstance"> | string
    modules?: InstitutionInstanceModuleListRelationFilter
    User?: UserListRelationFilter
    externalLinks?: ExternalLinksListRelationFilter
  }

  export type InstitutionInstanceOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    institutionName?: SortOrder
    institutionSlug?: SortOrder
    modules?: InstitutionInstanceModuleOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
    externalLinks?: ExternalLinksOrderByRelationAggregateInput
  }

  export type InstitutionInstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    institutionSlug?: string
    AND?: InstitutionInstanceWhereInput | InstitutionInstanceWhereInput[]
    OR?: InstitutionInstanceWhereInput[]
    NOT?: InstitutionInstanceWhereInput | InstitutionInstanceWhereInput[]
    createdAt?: DateTimeFilter<"InstitutionInstance"> | Date | string
    updatedAt?: DateTimeFilter<"InstitutionInstance"> | Date | string
    institutionName?: StringFilter<"InstitutionInstance"> | string
    modules?: InstitutionInstanceModuleListRelationFilter
    User?: UserListRelationFilter
    externalLinks?: ExternalLinksListRelationFilter
  }, "id" | "institutionSlug">

  export type InstitutionInstanceOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    institutionName?: SortOrder
    institutionSlug?: SortOrder
    _count?: InstitutionInstanceCountOrderByAggregateInput
    _max?: InstitutionInstanceMaxOrderByAggregateInput
    _min?: InstitutionInstanceMinOrderByAggregateInput
  }

  export type InstitutionInstanceScalarWhereWithAggregatesInput = {
    AND?: InstitutionInstanceScalarWhereWithAggregatesInput | InstitutionInstanceScalarWhereWithAggregatesInput[]
    OR?: InstitutionInstanceScalarWhereWithAggregatesInput[]
    NOT?: InstitutionInstanceScalarWhereWithAggregatesInput | InstitutionInstanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InstitutionInstance"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InstitutionInstance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InstitutionInstance"> | Date | string
    institutionName?: StringWithAggregatesFilter<"InstitutionInstance"> | string
    institutionSlug?: StringWithAggregatesFilter<"InstitutionInstance"> | string
  }

  export type InstitutionInstanceModuleWhereInput = {
    AND?: InstitutionInstanceModuleWhereInput | InstitutionInstanceModuleWhereInput[]
    OR?: InstitutionInstanceModuleWhereInput[]
    NOT?: InstitutionInstanceModuleWhereInput | InstitutionInstanceModuleWhereInput[]
    id?: StringFilter<"InstitutionInstanceModule"> | string
    createdAt?: DateTimeFilter<"InstitutionInstanceModule"> | Date | string
    updatedAt?: DateTimeFilter<"InstitutionInstanceModule"> | Date | string
    baseURL?: StringFilter<"InstitutionInstanceModule"> | string
    isEnabled?: BoolFilter<"InstitutionInstanceModule"> | boolean
    status?: StringFilter<"InstitutionInstanceModule"> | string
    apiKey?: StringNullableFilter<"InstitutionInstanceModule"> | string | null
    expectedMajorVersion?: IntFilter<"InstitutionInstanceModule"> | number
    expectedMinorVersion?: IntFilter<"InstitutionInstanceModule"> | number
    instanceId?: StringFilter<"InstitutionInstanceModule"> | string
    typeId?: StringFilter<"InstitutionInstanceModule"> | string
    instance?: XOR<InstitutionInstanceScalarRelationFilter, InstitutionInstanceWhereInput>
    type?: XOR<InstitutionInstanceModuleTypeScalarRelationFilter, InstitutionInstanceModuleTypeWhereInput>
  }

  export type InstitutionInstanceModuleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseURL?: SortOrder
    isEnabled?: SortOrder
    status?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    expectedMajorVersion?: SortOrder
    expectedMinorVersion?: SortOrder
    instanceId?: SortOrder
    typeId?: SortOrder
    instance?: InstitutionInstanceOrderByWithRelationInput
    type?: InstitutionInstanceModuleTypeOrderByWithRelationInput
  }

  export type InstitutionInstanceModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    instanceId_typeId?: InstitutionInstanceModuleInstanceIdTypeIdCompoundUniqueInput
    AND?: InstitutionInstanceModuleWhereInput | InstitutionInstanceModuleWhereInput[]
    OR?: InstitutionInstanceModuleWhereInput[]
    NOT?: InstitutionInstanceModuleWhereInput | InstitutionInstanceModuleWhereInput[]
    createdAt?: DateTimeFilter<"InstitutionInstanceModule"> | Date | string
    updatedAt?: DateTimeFilter<"InstitutionInstanceModule"> | Date | string
    baseURL?: StringFilter<"InstitutionInstanceModule"> | string
    isEnabled?: BoolFilter<"InstitutionInstanceModule"> | boolean
    status?: StringFilter<"InstitutionInstanceModule"> | string
    apiKey?: StringNullableFilter<"InstitutionInstanceModule"> | string | null
    expectedMajorVersion?: IntFilter<"InstitutionInstanceModule"> | number
    expectedMinorVersion?: IntFilter<"InstitutionInstanceModule"> | number
    instanceId?: StringFilter<"InstitutionInstanceModule"> | string
    typeId?: StringFilter<"InstitutionInstanceModule"> | string
    instance?: XOR<InstitutionInstanceScalarRelationFilter, InstitutionInstanceWhereInput>
    type?: XOR<InstitutionInstanceModuleTypeScalarRelationFilter, InstitutionInstanceModuleTypeWhereInput>
  }, "id" | "instanceId_typeId">

  export type InstitutionInstanceModuleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseURL?: SortOrder
    isEnabled?: SortOrder
    status?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    expectedMajorVersion?: SortOrder
    expectedMinorVersion?: SortOrder
    instanceId?: SortOrder
    typeId?: SortOrder
    _count?: InstitutionInstanceModuleCountOrderByAggregateInput
    _avg?: InstitutionInstanceModuleAvgOrderByAggregateInput
    _max?: InstitutionInstanceModuleMaxOrderByAggregateInput
    _min?: InstitutionInstanceModuleMinOrderByAggregateInput
    _sum?: InstitutionInstanceModuleSumOrderByAggregateInput
  }

  export type InstitutionInstanceModuleScalarWhereWithAggregatesInput = {
    AND?: InstitutionInstanceModuleScalarWhereWithAggregatesInput | InstitutionInstanceModuleScalarWhereWithAggregatesInput[]
    OR?: InstitutionInstanceModuleScalarWhereWithAggregatesInput[]
    NOT?: InstitutionInstanceModuleScalarWhereWithAggregatesInput | InstitutionInstanceModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InstitutionInstanceModule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InstitutionInstanceModule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InstitutionInstanceModule"> | Date | string
    baseURL?: StringWithAggregatesFilter<"InstitutionInstanceModule"> | string
    isEnabled?: BoolWithAggregatesFilter<"InstitutionInstanceModule"> | boolean
    status?: StringWithAggregatesFilter<"InstitutionInstanceModule"> | string
    apiKey?: StringNullableWithAggregatesFilter<"InstitutionInstanceModule"> | string | null
    expectedMajorVersion?: IntWithAggregatesFilter<"InstitutionInstanceModule"> | number
    expectedMinorVersion?: IntWithAggregatesFilter<"InstitutionInstanceModule"> | number
    instanceId?: StringWithAggregatesFilter<"InstitutionInstanceModule"> | string
    typeId?: StringWithAggregatesFilter<"InstitutionInstanceModule"> | string
  }

  export type InstitutionInstanceModuleTypeWhereInput = {
    AND?: InstitutionInstanceModuleTypeWhereInput | InstitutionInstanceModuleTypeWhereInput[]
    OR?: InstitutionInstanceModuleTypeWhereInput[]
    NOT?: InstitutionInstanceModuleTypeWhereInput | InstitutionInstanceModuleTypeWhereInput[]
    id?: StringFilter<"InstitutionInstanceModuleType"> | string
    slug?: StringFilter<"InstitutionInstanceModuleType"> | string
    name?: StringFilter<"InstitutionInstanceModuleType"> | string
    InstitutionInstanceModule?: InstitutionInstanceModuleListRelationFilter
  }

  export type InstitutionInstanceModuleTypeOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    InstitutionInstanceModule?: InstitutionInstanceModuleOrderByRelationAggregateInput
  }

  export type InstitutionInstanceModuleTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: InstitutionInstanceModuleTypeWhereInput | InstitutionInstanceModuleTypeWhereInput[]
    OR?: InstitutionInstanceModuleTypeWhereInput[]
    NOT?: InstitutionInstanceModuleTypeWhereInput | InstitutionInstanceModuleTypeWhereInput[]
    name?: StringFilter<"InstitutionInstanceModuleType"> | string
    InstitutionInstanceModule?: InstitutionInstanceModuleListRelationFilter
  }, "id" | "slug">

  export type InstitutionInstanceModuleTypeOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    _count?: InstitutionInstanceModuleTypeCountOrderByAggregateInput
    _max?: InstitutionInstanceModuleTypeMaxOrderByAggregateInput
    _min?: InstitutionInstanceModuleTypeMinOrderByAggregateInput
  }

  export type InstitutionInstanceModuleTypeScalarWhereWithAggregatesInput = {
    AND?: InstitutionInstanceModuleTypeScalarWhereWithAggregatesInput | InstitutionInstanceModuleTypeScalarWhereWithAggregatesInput[]
    OR?: InstitutionInstanceModuleTypeScalarWhereWithAggregatesInput[]
    NOT?: InstitutionInstanceModuleTypeScalarWhereWithAggregatesInput | InstitutionInstanceModuleTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InstitutionInstanceModuleType"> | string
    slug?: StringWithAggregatesFilter<"InstitutionInstanceModuleType"> | string
    name?: StringWithAggregatesFilter<"InstitutionInstanceModuleType"> | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    passwordHash: string
    emails?: EmailCreateNestedManyWithoutUserInput
    role: RoleCreateNestedOneWithoutUserInput
    instance?: InstitutionInstanceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    passwordHash: string
    roleId: string
    instanceId?: string | null
    emails?: EmailUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emails?: EmailUpdateManyWithoutUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    instance?: InstitutionInstanceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    instanceId?: NullableStringFieldUpdateOperationsInput | string | null
    emails?: EmailUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    passwordHash: string
    roleId: string
    instanceId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    instanceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    description: string
    User?: UserCreateNestedManyWithoutRoleInput
    permissions?: PermissionCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutRoleNestedInput
    permissions?: PermissionUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    description: string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionCreateInput = {
    id?: string
    name: string
    description: string
    roles?: RoleCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    roles?: RoleUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roles?: RoleUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roles?: RoleUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: string
    name: string
    description: string
  }

  export type PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type EmailCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmailsInput
  }

  export type EmailUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type EmailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailsNestedInput
  }

  export type EmailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailCreateManyInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type EmailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalLinksCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    name: string
    emoji: string
    scope: $Enums.ExternalLinkScope
    institutionInstance?: InstitutionInstanceCreateNestedOneWithoutExternalLinksInput
  }

  export type ExternalLinksUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    name: string
    emoji: string
    scope: $Enums.ExternalLinkScope
    institutionInstanceId?: string | null
  }

  export type ExternalLinksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    scope?: EnumExternalLinkScopeFieldUpdateOperationsInput | $Enums.ExternalLinkScope
    institutionInstance?: InstitutionInstanceUpdateOneWithoutExternalLinksNestedInput
  }

  export type ExternalLinksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    scope?: EnumExternalLinkScopeFieldUpdateOperationsInput | $Enums.ExternalLinkScope
    institutionInstanceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExternalLinksCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    name: string
    emoji: string
    scope: $Enums.ExternalLinkScope
    institutionInstanceId?: string | null
  }

  export type ExternalLinksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    scope?: EnumExternalLinkScopeFieldUpdateOperationsInput | $Enums.ExternalLinkScope
  }

  export type ExternalLinksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    scope?: EnumExternalLinkScopeFieldUpdateOperationsInput | $Enums.ExternalLinkScope
    institutionInstanceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArticlesCreateInput = {
    id?: string
    slug: string
    title: string
    content: string
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticlesUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    content: string
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticlesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesCreateManyInput = {
    id?: string
    slug: string
    title: string
    content: string
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticlesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstitutionInstanceCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institutionName: string
    institutionSlug: string
    modules?: InstitutionInstanceModuleCreateNestedManyWithoutInstanceInput
    User?: UserCreateNestedManyWithoutInstanceInput
    externalLinks?: ExternalLinksCreateNestedManyWithoutInstitutionInstanceInput
  }

  export type InstitutionInstanceUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institutionName: string
    institutionSlug: string
    modules?: InstitutionInstanceModuleUncheckedCreateNestedManyWithoutInstanceInput
    User?: UserUncheckedCreateNestedManyWithoutInstanceInput
    externalLinks?: ExternalLinksUncheckedCreateNestedManyWithoutInstitutionInstanceInput
  }

  export type InstitutionInstanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionSlug?: StringFieldUpdateOperationsInput | string
    modules?: InstitutionInstanceModuleUpdateManyWithoutInstanceNestedInput
    User?: UserUpdateManyWithoutInstanceNestedInput
    externalLinks?: ExternalLinksUpdateManyWithoutInstitutionInstanceNestedInput
  }

  export type InstitutionInstanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionSlug?: StringFieldUpdateOperationsInput | string
    modules?: InstitutionInstanceModuleUncheckedUpdateManyWithoutInstanceNestedInput
    User?: UserUncheckedUpdateManyWithoutInstanceNestedInput
    externalLinks?: ExternalLinksUncheckedUpdateManyWithoutInstitutionInstanceNestedInput
  }

  export type InstitutionInstanceCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institutionName: string
    institutionSlug: string
  }

  export type InstitutionInstanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionSlug?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionInstanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionSlug?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionInstanceModuleCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseURL: string
    isEnabled?: boolean
    status: string
    apiKey?: string | null
    expectedMajorVersion: number
    expectedMinorVersion: number
    instance: InstitutionInstanceCreateNestedOneWithoutModulesInput
    type: InstitutionInstanceModuleTypeCreateNestedOneWithoutInstitutionInstanceModuleInput
  }

  export type InstitutionInstanceModuleUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseURL: string
    isEnabled?: boolean
    status: string
    apiKey?: string | null
    expectedMajorVersion: number
    expectedMinorVersion: number
    instanceId: string
    typeId: string
  }

  export type InstitutionInstanceModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseURL?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMajorVersion?: IntFieldUpdateOperationsInput | number
    expectedMinorVersion?: IntFieldUpdateOperationsInput | number
    instance?: InstitutionInstanceUpdateOneRequiredWithoutModulesNestedInput
    type?: InstitutionInstanceModuleTypeUpdateOneRequiredWithoutInstitutionInstanceModuleNestedInput
  }

  export type InstitutionInstanceModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseURL?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMajorVersion?: IntFieldUpdateOperationsInput | number
    expectedMinorVersion?: IntFieldUpdateOperationsInput | number
    instanceId?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionInstanceModuleCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseURL: string
    isEnabled?: boolean
    status: string
    apiKey?: string | null
    expectedMajorVersion: number
    expectedMinorVersion: number
    instanceId: string
    typeId: string
  }

  export type InstitutionInstanceModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseURL?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMajorVersion?: IntFieldUpdateOperationsInput | number
    expectedMinorVersion?: IntFieldUpdateOperationsInput | number
  }

  export type InstitutionInstanceModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseURL?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMajorVersion?: IntFieldUpdateOperationsInput | number
    expectedMinorVersion?: IntFieldUpdateOperationsInput | number
    instanceId?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionInstanceModuleTypeCreateInput = {
    id?: string
    slug: string
    name: string
    InstitutionInstanceModule?: InstitutionInstanceModuleCreateNestedManyWithoutTypeInput
  }

  export type InstitutionInstanceModuleTypeUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    InstitutionInstanceModule?: InstitutionInstanceModuleUncheckedCreateNestedManyWithoutTypeInput
  }

  export type InstitutionInstanceModuleTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    InstitutionInstanceModule?: InstitutionInstanceModuleUpdateManyWithoutTypeNestedInput
  }

  export type InstitutionInstanceModuleTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    InstitutionInstanceModule?: InstitutionInstanceModuleUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type InstitutionInstanceModuleTypeCreateManyInput = {
    id?: string
    slug: string
    name: string
  }

  export type InstitutionInstanceModuleTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionInstanceModuleTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EmailListRelationFilter = {
    every?: EmailWhereInput
    some?: EmailWhereInput
    none?: EmailWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type InstitutionInstanceNullableScalarRelationFilter = {
    is?: InstitutionInstanceWhereInput | null
    isNot?: InstitutionInstanceWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
    roleId?: SortOrder
    instanceId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
    roleId?: SortOrder
    instanceId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
    roleId?: SortOrder
    instanceId?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmailCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EmailMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EmailMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumExternalLinkScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExternalLinkScope | EnumExternalLinkScopeFieldRefInput<$PrismaModel>
    in?: $Enums.ExternalLinkScope[] | ListEnumExternalLinkScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExternalLinkScope[] | ListEnumExternalLinkScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumExternalLinkScopeFilter<$PrismaModel> | $Enums.ExternalLinkScope
  }

  export type ExternalLinksCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    scope?: SortOrder
    institutionInstanceId?: SortOrder
  }

  export type ExternalLinksMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    scope?: SortOrder
    institutionInstanceId?: SortOrder
  }

  export type ExternalLinksMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    scope?: SortOrder
    institutionInstanceId?: SortOrder
  }

  export type EnumExternalLinkScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExternalLinkScope | EnumExternalLinkScopeFieldRefInput<$PrismaModel>
    in?: $Enums.ExternalLinkScope[] | ListEnumExternalLinkScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExternalLinkScope[] | ListEnumExternalLinkScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumExternalLinkScopeWithAggregatesFilter<$PrismaModel> | $Enums.ExternalLinkScope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExternalLinkScopeFilter<$PrismaModel>
    _max?: NestedEnumExternalLinkScopeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ArticlesCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type InstitutionInstanceModuleListRelationFilter = {
    every?: InstitutionInstanceModuleWhereInput
    some?: InstitutionInstanceModuleWhereInput
    none?: InstitutionInstanceModuleWhereInput
  }

  export type ExternalLinksListRelationFilter = {
    every?: ExternalLinksWhereInput
    some?: ExternalLinksWhereInput
    none?: ExternalLinksWhereInput
  }

  export type InstitutionInstanceModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExternalLinksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstitutionInstanceCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    institutionName?: SortOrder
    institutionSlug?: SortOrder
  }

  export type InstitutionInstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    institutionName?: SortOrder
    institutionSlug?: SortOrder
  }

  export type InstitutionInstanceMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    institutionName?: SortOrder
    institutionSlug?: SortOrder
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

  export type InstitutionInstanceScalarRelationFilter = {
    is?: InstitutionInstanceWhereInput
    isNot?: InstitutionInstanceWhereInput
  }

  export type InstitutionInstanceModuleTypeScalarRelationFilter = {
    is?: InstitutionInstanceModuleTypeWhereInput
    isNot?: InstitutionInstanceModuleTypeWhereInput
  }

  export type InstitutionInstanceModuleInstanceIdTypeIdCompoundUniqueInput = {
    instanceId: string
    typeId: string
  }

  export type InstitutionInstanceModuleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseURL?: SortOrder
    isEnabled?: SortOrder
    status?: SortOrder
    apiKey?: SortOrder
    expectedMajorVersion?: SortOrder
    expectedMinorVersion?: SortOrder
    instanceId?: SortOrder
    typeId?: SortOrder
  }

  export type InstitutionInstanceModuleAvgOrderByAggregateInput = {
    expectedMajorVersion?: SortOrder
    expectedMinorVersion?: SortOrder
  }

  export type InstitutionInstanceModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseURL?: SortOrder
    isEnabled?: SortOrder
    status?: SortOrder
    apiKey?: SortOrder
    expectedMajorVersion?: SortOrder
    expectedMinorVersion?: SortOrder
    instanceId?: SortOrder
    typeId?: SortOrder
  }

  export type InstitutionInstanceModuleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseURL?: SortOrder
    isEnabled?: SortOrder
    status?: SortOrder
    apiKey?: SortOrder
    expectedMajorVersion?: SortOrder
    expectedMinorVersion?: SortOrder
    instanceId?: SortOrder
    typeId?: SortOrder
  }

  export type InstitutionInstanceModuleSumOrderByAggregateInput = {
    expectedMajorVersion?: SortOrder
    expectedMinorVersion?: SortOrder
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

  export type InstitutionInstanceModuleTypeCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
  }

  export type InstitutionInstanceModuleTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
  }

  export type InstitutionInstanceModuleTypeMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
  }

  export type EmailCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type RoleCreateNestedOneWithoutUserInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    connect?: RoleWhereUniqueInput
  }

  export type InstitutionInstanceCreateNestedOneWithoutUserInput = {
    create?: XOR<InstitutionInstanceCreateWithoutUserInput, InstitutionInstanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstitutionInstanceCreateOrConnectWithoutUserInput
    connect?: InstitutionInstanceWhereUniqueInput
  }

  export type EmailUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmailUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutUserInput | EmailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutUserInput | EmailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutUserInput | EmailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type RoleUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    upsert?: RoleUpsertWithoutUserInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserInput, RoleUpdateWithoutUserInput>, RoleUncheckedUpdateWithoutUserInput>
  }

  export type InstitutionInstanceUpdateOneWithoutUserNestedInput = {
    create?: XOR<InstitutionInstanceCreateWithoutUserInput, InstitutionInstanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstitutionInstanceCreateOrConnectWithoutUserInput
    upsert?: InstitutionInstanceUpsertWithoutUserInput
    disconnect?: InstitutionInstanceWhereInput | boolean
    delete?: InstitutionInstanceWhereInput | boolean
    connect?: InstitutionInstanceWhereUniqueInput
    update?: XOR<XOR<InstitutionInstanceUpdateToOneWithWhereWithoutUserInput, InstitutionInstanceUpdateWithoutUserInput>, InstitutionInstanceUncheckedUpdateWithoutUserInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EmailUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutUserInput | EmailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutUserInput | EmailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutUserInput | EmailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PermissionCreateNestedManyWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PermissionUpdateManyWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRolesInput | PermissionUpsertWithWhereUniqueWithoutRolesInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRolesInput | PermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRolesInput | PermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRolesInput | PermissionUpsertWithWhereUniqueWithoutRolesInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRolesInput | PermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRolesInput | PermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type RoleCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutPermissionsInput | RoleUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutPermissionsInput | RoleUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutPermissionsInput | RoleUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutPermissionsInput | RoleUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutPermissionsInput | RoleUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutPermissionsInput | RoleUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmailsInput = {
    create?: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmailsNestedInput = {
    create?: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailsInput
    upsert?: UserUpsertWithoutEmailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailsInput, UserUpdateWithoutEmailsInput>, UserUncheckedUpdateWithoutEmailsInput>
  }

  export type InstitutionInstanceCreateNestedOneWithoutExternalLinksInput = {
    create?: XOR<InstitutionInstanceCreateWithoutExternalLinksInput, InstitutionInstanceUncheckedCreateWithoutExternalLinksInput>
    connectOrCreate?: InstitutionInstanceCreateOrConnectWithoutExternalLinksInput
    connect?: InstitutionInstanceWhereUniqueInput
  }

  export type EnumExternalLinkScopeFieldUpdateOperationsInput = {
    set?: $Enums.ExternalLinkScope
  }

  export type InstitutionInstanceUpdateOneWithoutExternalLinksNestedInput = {
    create?: XOR<InstitutionInstanceCreateWithoutExternalLinksInput, InstitutionInstanceUncheckedCreateWithoutExternalLinksInput>
    connectOrCreate?: InstitutionInstanceCreateOrConnectWithoutExternalLinksInput
    upsert?: InstitutionInstanceUpsertWithoutExternalLinksInput
    disconnect?: InstitutionInstanceWhereInput | boolean
    delete?: InstitutionInstanceWhereInput | boolean
    connect?: InstitutionInstanceWhereUniqueInput
    update?: XOR<XOR<InstitutionInstanceUpdateToOneWithWhereWithoutExternalLinksInput, InstitutionInstanceUpdateWithoutExternalLinksInput>, InstitutionInstanceUncheckedUpdateWithoutExternalLinksInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type InstitutionInstanceModuleCreateNestedManyWithoutInstanceInput = {
    create?: XOR<InstitutionInstanceModuleCreateWithoutInstanceInput, InstitutionInstanceModuleUncheckedCreateWithoutInstanceInput> | InstitutionInstanceModuleCreateWithoutInstanceInput[] | InstitutionInstanceModuleUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: InstitutionInstanceModuleCreateOrConnectWithoutInstanceInput | InstitutionInstanceModuleCreateOrConnectWithoutInstanceInput[]
    createMany?: InstitutionInstanceModuleCreateManyInstanceInputEnvelope
    connect?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutInstanceInput = {
    create?: XOR<UserCreateWithoutInstanceInput, UserUncheckedCreateWithoutInstanceInput> | UserCreateWithoutInstanceInput[] | UserUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstanceInput | UserCreateOrConnectWithoutInstanceInput[]
    createMany?: UserCreateManyInstanceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExternalLinksCreateNestedManyWithoutInstitutionInstanceInput = {
    create?: XOR<ExternalLinksCreateWithoutInstitutionInstanceInput, ExternalLinksUncheckedCreateWithoutInstitutionInstanceInput> | ExternalLinksCreateWithoutInstitutionInstanceInput[] | ExternalLinksUncheckedCreateWithoutInstitutionInstanceInput[]
    connectOrCreate?: ExternalLinksCreateOrConnectWithoutInstitutionInstanceInput | ExternalLinksCreateOrConnectWithoutInstitutionInstanceInput[]
    createMany?: ExternalLinksCreateManyInstitutionInstanceInputEnvelope
    connect?: ExternalLinksWhereUniqueInput | ExternalLinksWhereUniqueInput[]
  }

  export type InstitutionInstanceModuleUncheckedCreateNestedManyWithoutInstanceInput = {
    create?: XOR<InstitutionInstanceModuleCreateWithoutInstanceInput, InstitutionInstanceModuleUncheckedCreateWithoutInstanceInput> | InstitutionInstanceModuleCreateWithoutInstanceInput[] | InstitutionInstanceModuleUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: InstitutionInstanceModuleCreateOrConnectWithoutInstanceInput | InstitutionInstanceModuleCreateOrConnectWithoutInstanceInput[]
    createMany?: InstitutionInstanceModuleCreateManyInstanceInputEnvelope
    connect?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutInstanceInput = {
    create?: XOR<UserCreateWithoutInstanceInput, UserUncheckedCreateWithoutInstanceInput> | UserCreateWithoutInstanceInput[] | UserUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstanceInput | UserCreateOrConnectWithoutInstanceInput[]
    createMany?: UserCreateManyInstanceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExternalLinksUncheckedCreateNestedManyWithoutInstitutionInstanceInput = {
    create?: XOR<ExternalLinksCreateWithoutInstitutionInstanceInput, ExternalLinksUncheckedCreateWithoutInstitutionInstanceInput> | ExternalLinksCreateWithoutInstitutionInstanceInput[] | ExternalLinksUncheckedCreateWithoutInstitutionInstanceInput[]
    connectOrCreate?: ExternalLinksCreateOrConnectWithoutInstitutionInstanceInput | ExternalLinksCreateOrConnectWithoutInstitutionInstanceInput[]
    createMany?: ExternalLinksCreateManyInstitutionInstanceInputEnvelope
    connect?: ExternalLinksWhereUniqueInput | ExternalLinksWhereUniqueInput[]
  }

  export type InstitutionInstanceModuleUpdateManyWithoutInstanceNestedInput = {
    create?: XOR<InstitutionInstanceModuleCreateWithoutInstanceInput, InstitutionInstanceModuleUncheckedCreateWithoutInstanceInput> | InstitutionInstanceModuleCreateWithoutInstanceInput[] | InstitutionInstanceModuleUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: InstitutionInstanceModuleCreateOrConnectWithoutInstanceInput | InstitutionInstanceModuleCreateOrConnectWithoutInstanceInput[]
    upsert?: InstitutionInstanceModuleUpsertWithWhereUniqueWithoutInstanceInput | InstitutionInstanceModuleUpsertWithWhereUniqueWithoutInstanceInput[]
    createMany?: InstitutionInstanceModuleCreateManyInstanceInputEnvelope
    set?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    disconnect?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    delete?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    connect?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    update?: InstitutionInstanceModuleUpdateWithWhereUniqueWithoutInstanceInput | InstitutionInstanceModuleUpdateWithWhereUniqueWithoutInstanceInput[]
    updateMany?: InstitutionInstanceModuleUpdateManyWithWhereWithoutInstanceInput | InstitutionInstanceModuleUpdateManyWithWhereWithoutInstanceInput[]
    deleteMany?: InstitutionInstanceModuleScalarWhereInput | InstitutionInstanceModuleScalarWhereInput[]
  }

  export type UserUpdateManyWithoutInstanceNestedInput = {
    create?: XOR<UserCreateWithoutInstanceInput, UserUncheckedCreateWithoutInstanceInput> | UserCreateWithoutInstanceInput[] | UserUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstanceInput | UserCreateOrConnectWithoutInstanceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInstanceInput | UserUpsertWithWhereUniqueWithoutInstanceInput[]
    createMany?: UserCreateManyInstanceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInstanceInput | UserUpdateWithWhereUniqueWithoutInstanceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInstanceInput | UserUpdateManyWithWhereWithoutInstanceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExternalLinksUpdateManyWithoutInstitutionInstanceNestedInput = {
    create?: XOR<ExternalLinksCreateWithoutInstitutionInstanceInput, ExternalLinksUncheckedCreateWithoutInstitutionInstanceInput> | ExternalLinksCreateWithoutInstitutionInstanceInput[] | ExternalLinksUncheckedCreateWithoutInstitutionInstanceInput[]
    connectOrCreate?: ExternalLinksCreateOrConnectWithoutInstitutionInstanceInput | ExternalLinksCreateOrConnectWithoutInstitutionInstanceInput[]
    upsert?: ExternalLinksUpsertWithWhereUniqueWithoutInstitutionInstanceInput | ExternalLinksUpsertWithWhereUniqueWithoutInstitutionInstanceInput[]
    createMany?: ExternalLinksCreateManyInstitutionInstanceInputEnvelope
    set?: ExternalLinksWhereUniqueInput | ExternalLinksWhereUniqueInput[]
    disconnect?: ExternalLinksWhereUniqueInput | ExternalLinksWhereUniqueInput[]
    delete?: ExternalLinksWhereUniqueInput | ExternalLinksWhereUniqueInput[]
    connect?: ExternalLinksWhereUniqueInput | ExternalLinksWhereUniqueInput[]
    update?: ExternalLinksUpdateWithWhereUniqueWithoutInstitutionInstanceInput | ExternalLinksUpdateWithWhereUniqueWithoutInstitutionInstanceInput[]
    updateMany?: ExternalLinksUpdateManyWithWhereWithoutInstitutionInstanceInput | ExternalLinksUpdateManyWithWhereWithoutInstitutionInstanceInput[]
    deleteMany?: ExternalLinksScalarWhereInput | ExternalLinksScalarWhereInput[]
  }

  export type InstitutionInstanceModuleUncheckedUpdateManyWithoutInstanceNestedInput = {
    create?: XOR<InstitutionInstanceModuleCreateWithoutInstanceInput, InstitutionInstanceModuleUncheckedCreateWithoutInstanceInput> | InstitutionInstanceModuleCreateWithoutInstanceInput[] | InstitutionInstanceModuleUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: InstitutionInstanceModuleCreateOrConnectWithoutInstanceInput | InstitutionInstanceModuleCreateOrConnectWithoutInstanceInput[]
    upsert?: InstitutionInstanceModuleUpsertWithWhereUniqueWithoutInstanceInput | InstitutionInstanceModuleUpsertWithWhereUniqueWithoutInstanceInput[]
    createMany?: InstitutionInstanceModuleCreateManyInstanceInputEnvelope
    set?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    disconnect?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    delete?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    connect?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    update?: InstitutionInstanceModuleUpdateWithWhereUniqueWithoutInstanceInput | InstitutionInstanceModuleUpdateWithWhereUniqueWithoutInstanceInput[]
    updateMany?: InstitutionInstanceModuleUpdateManyWithWhereWithoutInstanceInput | InstitutionInstanceModuleUpdateManyWithWhereWithoutInstanceInput[]
    deleteMany?: InstitutionInstanceModuleScalarWhereInput | InstitutionInstanceModuleScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutInstanceNestedInput = {
    create?: XOR<UserCreateWithoutInstanceInput, UserUncheckedCreateWithoutInstanceInput> | UserCreateWithoutInstanceInput[] | UserUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstanceInput | UserCreateOrConnectWithoutInstanceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInstanceInput | UserUpsertWithWhereUniqueWithoutInstanceInput[]
    createMany?: UserCreateManyInstanceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInstanceInput | UserUpdateWithWhereUniqueWithoutInstanceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInstanceInput | UserUpdateManyWithWhereWithoutInstanceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExternalLinksUncheckedUpdateManyWithoutInstitutionInstanceNestedInput = {
    create?: XOR<ExternalLinksCreateWithoutInstitutionInstanceInput, ExternalLinksUncheckedCreateWithoutInstitutionInstanceInput> | ExternalLinksCreateWithoutInstitutionInstanceInput[] | ExternalLinksUncheckedCreateWithoutInstitutionInstanceInput[]
    connectOrCreate?: ExternalLinksCreateOrConnectWithoutInstitutionInstanceInput | ExternalLinksCreateOrConnectWithoutInstitutionInstanceInput[]
    upsert?: ExternalLinksUpsertWithWhereUniqueWithoutInstitutionInstanceInput | ExternalLinksUpsertWithWhereUniqueWithoutInstitutionInstanceInput[]
    createMany?: ExternalLinksCreateManyInstitutionInstanceInputEnvelope
    set?: ExternalLinksWhereUniqueInput | ExternalLinksWhereUniqueInput[]
    disconnect?: ExternalLinksWhereUniqueInput | ExternalLinksWhereUniqueInput[]
    delete?: ExternalLinksWhereUniqueInput | ExternalLinksWhereUniqueInput[]
    connect?: ExternalLinksWhereUniqueInput | ExternalLinksWhereUniqueInput[]
    update?: ExternalLinksUpdateWithWhereUniqueWithoutInstitutionInstanceInput | ExternalLinksUpdateWithWhereUniqueWithoutInstitutionInstanceInput[]
    updateMany?: ExternalLinksUpdateManyWithWhereWithoutInstitutionInstanceInput | ExternalLinksUpdateManyWithWhereWithoutInstitutionInstanceInput[]
    deleteMany?: ExternalLinksScalarWhereInput | ExternalLinksScalarWhereInput[]
  }

  export type InstitutionInstanceCreateNestedOneWithoutModulesInput = {
    create?: XOR<InstitutionInstanceCreateWithoutModulesInput, InstitutionInstanceUncheckedCreateWithoutModulesInput>
    connectOrCreate?: InstitutionInstanceCreateOrConnectWithoutModulesInput
    connect?: InstitutionInstanceWhereUniqueInput
  }

  export type InstitutionInstanceModuleTypeCreateNestedOneWithoutInstitutionInstanceModuleInput = {
    create?: XOR<InstitutionInstanceModuleTypeCreateWithoutInstitutionInstanceModuleInput, InstitutionInstanceModuleTypeUncheckedCreateWithoutInstitutionInstanceModuleInput>
    connectOrCreate?: InstitutionInstanceModuleTypeCreateOrConnectWithoutInstitutionInstanceModuleInput
    connect?: InstitutionInstanceModuleTypeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InstitutionInstanceUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<InstitutionInstanceCreateWithoutModulesInput, InstitutionInstanceUncheckedCreateWithoutModulesInput>
    connectOrCreate?: InstitutionInstanceCreateOrConnectWithoutModulesInput
    upsert?: InstitutionInstanceUpsertWithoutModulesInput
    connect?: InstitutionInstanceWhereUniqueInput
    update?: XOR<XOR<InstitutionInstanceUpdateToOneWithWhereWithoutModulesInput, InstitutionInstanceUpdateWithoutModulesInput>, InstitutionInstanceUncheckedUpdateWithoutModulesInput>
  }

  export type InstitutionInstanceModuleTypeUpdateOneRequiredWithoutInstitutionInstanceModuleNestedInput = {
    create?: XOR<InstitutionInstanceModuleTypeCreateWithoutInstitutionInstanceModuleInput, InstitutionInstanceModuleTypeUncheckedCreateWithoutInstitutionInstanceModuleInput>
    connectOrCreate?: InstitutionInstanceModuleTypeCreateOrConnectWithoutInstitutionInstanceModuleInput
    upsert?: InstitutionInstanceModuleTypeUpsertWithoutInstitutionInstanceModuleInput
    connect?: InstitutionInstanceModuleTypeWhereUniqueInput
    update?: XOR<XOR<InstitutionInstanceModuleTypeUpdateToOneWithWhereWithoutInstitutionInstanceModuleInput, InstitutionInstanceModuleTypeUpdateWithoutInstitutionInstanceModuleInput>, InstitutionInstanceModuleTypeUncheckedUpdateWithoutInstitutionInstanceModuleInput>
  }

  export type InstitutionInstanceModuleCreateNestedManyWithoutTypeInput = {
    create?: XOR<InstitutionInstanceModuleCreateWithoutTypeInput, InstitutionInstanceModuleUncheckedCreateWithoutTypeInput> | InstitutionInstanceModuleCreateWithoutTypeInput[] | InstitutionInstanceModuleUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: InstitutionInstanceModuleCreateOrConnectWithoutTypeInput | InstitutionInstanceModuleCreateOrConnectWithoutTypeInput[]
    createMany?: InstitutionInstanceModuleCreateManyTypeInputEnvelope
    connect?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
  }

  export type InstitutionInstanceModuleUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<InstitutionInstanceModuleCreateWithoutTypeInput, InstitutionInstanceModuleUncheckedCreateWithoutTypeInput> | InstitutionInstanceModuleCreateWithoutTypeInput[] | InstitutionInstanceModuleUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: InstitutionInstanceModuleCreateOrConnectWithoutTypeInput | InstitutionInstanceModuleCreateOrConnectWithoutTypeInput[]
    createMany?: InstitutionInstanceModuleCreateManyTypeInputEnvelope
    connect?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
  }

  export type InstitutionInstanceModuleUpdateManyWithoutTypeNestedInput = {
    create?: XOR<InstitutionInstanceModuleCreateWithoutTypeInput, InstitutionInstanceModuleUncheckedCreateWithoutTypeInput> | InstitutionInstanceModuleCreateWithoutTypeInput[] | InstitutionInstanceModuleUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: InstitutionInstanceModuleCreateOrConnectWithoutTypeInput | InstitutionInstanceModuleCreateOrConnectWithoutTypeInput[]
    upsert?: InstitutionInstanceModuleUpsertWithWhereUniqueWithoutTypeInput | InstitutionInstanceModuleUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: InstitutionInstanceModuleCreateManyTypeInputEnvelope
    set?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    disconnect?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    delete?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    connect?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    update?: InstitutionInstanceModuleUpdateWithWhereUniqueWithoutTypeInput | InstitutionInstanceModuleUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: InstitutionInstanceModuleUpdateManyWithWhereWithoutTypeInput | InstitutionInstanceModuleUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: InstitutionInstanceModuleScalarWhereInput | InstitutionInstanceModuleScalarWhereInput[]
  }

  export type InstitutionInstanceModuleUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<InstitutionInstanceModuleCreateWithoutTypeInput, InstitutionInstanceModuleUncheckedCreateWithoutTypeInput> | InstitutionInstanceModuleCreateWithoutTypeInput[] | InstitutionInstanceModuleUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: InstitutionInstanceModuleCreateOrConnectWithoutTypeInput | InstitutionInstanceModuleCreateOrConnectWithoutTypeInput[]
    upsert?: InstitutionInstanceModuleUpsertWithWhereUniqueWithoutTypeInput | InstitutionInstanceModuleUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: InstitutionInstanceModuleCreateManyTypeInputEnvelope
    set?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    disconnect?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    delete?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    connect?: InstitutionInstanceModuleWhereUniqueInput | InstitutionInstanceModuleWhereUniqueInput[]
    update?: InstitutionInstanceModuleUpdateWithWhereUniqueWithoutTypeInput | InstitutionInstanceModuleUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: InstitutionInstanceModuleUpdateManyWithWhereWithoutTypeInput | InstitutionInstanceModuleUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: InstitutionInstanceModuleScalarWhereInput | InstitutionInstanceModuleScalarWhereInput[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumExternalLinkScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExternalLinkScope | EnumExternalLinkScopeFieldRefInput<$PrismaModel>
    in?: $Enums.ExternalLinkScope[] | ListEnumExternalLinkScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExternalLinkScope[] | ListEnumExternalLinkScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumExternalLinkScopeFilter<$PrismaModel> | $Enums.ExternalLinkScope
  }

  export type NestedEnumExternalLinkScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExternalLinkScope | EnumExternalLinkScopeFieldRefInput<$PrismaModel>
    in?: $Enums.ExternalLinkScope[] | ListEnumExternalLinkScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExternalLinkScope[] | ListEnumExternalLinkScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumExternalLinkScopeWithAggregatesFilter<$PrismaModel> | $Enums.ExternalLinkScope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExternalLinkScopeFilter<$PrismaModel>
    _max?: NestedEnumExternalLinkScopeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EmailCreateWithoutUserInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailUncheckedCreateWithoutUserInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailCreateOrConnectWithoutUserInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput>
  }

  export type EmailCreateManyUserInputEnvelope = {
    data: EmailCreateManyUserInput | EmailCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    permissions?: PermissionCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleCreateOrConnectWithoutUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
  }

  export type InstitutionInstanceCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institutionName: string
    institutionSlug: string
    modules?: InstitutionInstanceModuleCreateNestedManyWithoutInstanceInput
    externalLinks?: ExternalLinksCreateNestedManyWithoutInstitutionInstanceInput
  }

  export type InstitutionInstanceUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institutionName: string
    institutionSlug: string
    modules?: InstitutionInstanceModuleUncheckedCreateNestedManyWithoutInstanceInput
    externalLinks?: ExternalLinksUncheckedCreateNestedManyWithoutInstitutionInstanceInput
  }

  export type InstitutionInstanceCreateOrConnectWithoutUserInput = {
    where: InstitutionInstanceWhereUniqueInput
    create: XOR<InstitutionInstanceCreateWithoutUserInput, InstitutionInstanceUncheckedCreateWithoutUserInput>
  }

  export type EmailUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailWhereUniqueInput
    update: XOR<EmailUpdateWithoutUserInput, EmailUncheckedUpdateWithoutUserInput>
    create: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput>
  }

  export type EmailUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailWhereUniqueInput
    data: XOR<EmailUpdateWithoutUserInput, EmailUncheckedUpdateWithoutUserInput>
  }

  export type EmailUpdateManyWithWhereWithoutUserInput = {
    where: EmailScalarWhereInput
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailScalarWhereInput = {
    AND?: EmailScalarWhereInput | EmailScalarWhereInput[]
    OR?: EmailScalarWhereInput[]
    NOT?: EmailScalarWhereInput | EmailScalarWhereInput[]
    id?: StringFilter<"Email"> | string
    email?: StringFilter<"Email"> | string
    createdAt?: DateTimeFilter<"Email"> | Date | string
    updatedAt?: DateTimeFilter<"Email"> | Date | string
    userId?: StringFilter<"Email"> | string
  }

  export type RoleUpsertWithoutUserInput = {
    update: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    permissions?: PermissionUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type InstitutionInstanceUpsertWithoutUserInput = {
    update: XOR<InstitutionInstanceUpdateWithoutUserInput, InstitutionInstanceUncheckedUpdateWithoutUserInput>
    create: XOR<InstitutionInstanceCreateWithoutUserInput, InstitutionInstanceUncheckedCreateWithoutUserInput>
    where?: InstitutionInstanceWhereInput
  }

  export type InstitutionInstanceUpdateToOneWithWhereWithoutUserInput = {
    where?: InstitutionInstanceWhereInput
    data: XOR<InstitutionInstanceUpdateWithoutUserInput, InstitutionInstanceUncheckedUpdateWithoutUserInput>
  }

  export type InstitutionInstanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionSlug?: StringFieldUpdateOperationsInput | string
    modules?: InstitutionInstanceModuleUpdateManyWithoutInstanceNestedInput
    externalLinks?: ExternalLinksUpdateManyWithoutInstitutionInstanceNestedInput
  }

  export type InstitutionInstanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionSlug?: StringFieldUpdateOperationsInput | string
    modules?: InstitutionInstanceModuleUncheckedUpdateManyWithoutInstanceNestedInput
    externalLinks?: ExternalLinksUncheckedUpdateManyWithoutInstitutionInstanceNestedInput
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    createdAt?: Date | string
    passwordHash: string
    emails?: EmailCreateNestedManyWithoutUserInput
    instance?: InstitutionInstanceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    createdAt?: Date | string
    passwordHash: string
    instanceId?: string | null
    emails?: EmailUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type PermissionCreateWithoutRolesInput = {
    id?: string
    name: string
    description: string
  }

  export type PermissionUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    description: string
  }

  export type PermissionCreateOrConnectWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    passwordHash?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    instanceId?: StringNullableFilter<"User"> | string | null
  }

  export type PermissionUpsertWithWhereUniqueWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type PermissionUpdateManyWithWhereWithoutRolesInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutRolesInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    OR?: PermissionScalarWhereInput[]
    NOT?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    id?: StringFilter<"Permission"> | string
    name?: StringFilter<"Permission"> | string
    description?: StringFilter<"Permission"> | string
  }

  export type RoleCreateWithoutPermissionsInput = {
    id?: string
    name: string
    description: string
    User?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutPermissionsInput = {
    id?: string
    name: string
    description: string
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type RoleUpdateManyWithWhereWithoutPermissionsInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutPermissionsInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringFilter<"Role"> | string
  }

  export type UserCreateWithoutEmailsInput = {
    id?: string
    createdAt?: Date | string
    passwordHash: string
    role: RoleCreateNestedOneWithoutUserInput
    instance?: InstitutionInstanceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailsInput = {
    id?: string
    createdAt?: Date | string
    passwordHash: string
    roleId: string
    instanceId?: string | null
  }

  export type UserCreateOrConnectWithoutEmailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
  }

  export type UserUpsertWithoutEmailsInput = {
    update: XOR<UserUpdateWithoutEmailsInput, UserUncheckedUpdateWithoutEmailsInput>
    create: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailsInput, UserUncheckedUpdateWithoutEmailsInput>
  }

  export type UserUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    instance?: InstitutionInstanceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    instanceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstitutionInstanceCreateWithoutExternalLinksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institutionName: string
    institutionSlug: string
    modules?: InstitutionInstanceModuleCreateNestedManyWithoutInstanceInput
    User?: UserCreateNestedManyWithoutInstanceInput
  }

  export type InstitutionInstanceUncheckedCreateWithoutExternalLinksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institutionName: string
    institutionSlug: string
    modules?: InstitutionInstanceModuleUncheckedCreateNestedManyWithoutInstanceInput
    User?: UserUncheckedCreateNestedManyWithoutInstanceInput
  }

  export type InstitutionInstanceCreateOrConnectWithoutExternalLinksInput = {
    where: InstitutionInstanceWhereUniqueInput
    create: XOR<InstitutionInstanceCreateWithoutExternalLinksInput, InstitutionInstanceUncheckedCreateWithoutExternalLinksInput>
  }

  export type InstitutionInstanceUpsertWithoutExternalLinksInput = {
    update: XOR<InstitutionInstanceUpdateWithoutExternalLinksInput, InstitutionInstanceUncheckedUpdateWithoutExternalLinksInput>
    create: XOR<InstitutionInstanceCreateWithoutExternalLinksInput, InstitutionInstanceUncheckedCreateWithoutExternalLinksInput>
    where?: InstitutionInstanceWhereInput
  }

  export type InstitutionInstanceUpdateToOneWithWhereWithoutExternalLinksInput = {
    where?: InstitutionInstanceWhereInput
    data: XOR<InstitutionInstanceUpdateWithoutExternalLinksInput, InstitutionInstanceUncheckedUpdateWithoutExternalLinksInput>
  }

  export type InstitutionInstanceUpdateWithoutExternalLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionSlug?: StringFieldUpdateOperationsInput | string
    modules?: InstitutionInstanceModuleUpdateManyWithoutInstanceNestedInput
    User?: UserUpdateManyWithoutInstanceNestedInput
  }

  export type InstitutionInstanceUncheckedUpdateWithoutExternalLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionSlug?: StringFieldUpdateOperationsInput | string
    modules?: InstitutionInstanceModuleUncheckedUpdateManyWithoutInstanceNestedInput
    User?: UserUncheckedUpdateManyWithoutInstanceNestedInput
  }

  export type InstitutionInstanceModuleCreateWithoutInstanceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseURL: string
    isEnabled?: boolean
    status: string
    apiKey?: string | null
    expectedMajorVersion: number
    expectedMinorVersion: number
    type: InstitutionInstanceModuleTypeCreateNestedOneWithoutInstitutionInstanceModuleInput
  }

  export type InstitutionInstanceModuleUncheckedCreateWithoutInstanceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseURL: string
    isEnabled?: boolean
    status: string
    apiKey?: string | null
    expectedMajorVersion: number
    expectedMinorVersion: number
    typeId: string
  }

  export type InstitutionInstanceModuleCreateOrConnectWithoutInstanceInput = {
    where: InstitutionInstanceModuleWhereUniqueInput
    create: XOR<InstitutionInstanceModuleCreateWithoutInstanceInput, InstitutionInstanceModuleUncheckedCreateWithoutInstanceInput>
  }

  export type InstitutionInstanceModuleCreateManyInstanceInputEnvelope = {
    data: InstitutionInstanceModuleCreateManyInstanceInput | InstitutionInstanceModuleCreateManyInstanceInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutInstanceInput = {
    id?: string
    createdAt?: Date | string
    passwordHash: string
    emails?: EmailCreateNestedManyWithoutUserInput
    role: RoleCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInstanceInput = {
    id?: string
    createdAt?: Date | string
    passwordHash: string
    roleId: string
    emails?: EmailUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInstanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstanceInput, UserUncheckedCreateWithoutInstanceInput>
  }

  export type UserCreateManyInstanceInputEnvelope = {
    data: UserCreateManyInstanceInput | UserCreateManyInstanceInput[]
    skipDuplicates?: boolean
  }

  export type ExternalLinksCreateWithoutInstitutionInstanceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    name: string
    emoji: string
    scope: $Enums.ExternalLinkScope
  }

  export type ExternalLinksUncheckedCreateWithoutInstitutionInstanceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    name: string
    emoji: string
    scope: $Enums.ExternalLinkScope
  }

  export type ExternalLinksCreateOrConnectWithoutInstitutionInstanceInput = {
    where: ExternalLinksWhereUniqueInput
    create: XOR<ExternalLinksCreateWithoutInstitutionInstanceInput, ExternalLinksUncheckedCreateWithoutInstitutionInstanceInput>
  }

  export type ExternalLinksCreateManyInstitutionInstanceInputEnvelope = {
    data: ExternalLinksCreateManyInstitutionInstanceInput | ExternalLinksCreateManyInstitutionInstanceInput[]
    skipDuplicates?: boolean
  }

  export type InstitutionInstanceModuleUpsertWithWhereUniqueWithoutInstanceInput = {
    where: InstitutionInstanceModuleWhereUniqueInput
    update: XOR<InstitutionInstanceModuleUpdateWithoutInstanceInput, InstitutionInstanceModuleUncheckedUpdateWithoutInstanceInput>
    create: XOR<InstitutionInstanceModuleCreateWithoutInstanceInput, InstitutionInstanceModuleUncheckedCreateWithoutInstanceInput>
  }

  export type InstitutionInstanceModuleUpdateWithWhereUniqueWithoutInstanceInput = {
    where: InstitutionInstanceModuleWhereUniqueInput
    data: XOR<InstitutionInstanceModuleUpdateWithoutInstanceInput, InstitutionInstanceModuleUncheckedUpdateWithoutInstanceInput>
  }

  export type InstitutionInstanceModuleUpdateManyWithWhereWithoutInstanceInput = {
    where: InstitutionInstanceModuleScalarWhereInput
    data: XOR<InstitutionInstanceModuleUpdateManyMutationInput, InstitutionInstanceModuleUncheckedUpdateManyWithoutInstanceInput>
  }

  export type InstitutionInstanceModuleScalarWhereInput = {
    AND?: InstitutionInstanceModuleScalarWhereInput | InstitutionInstanceModuleScalarWhereInput[]
    OR?: InstitutionInstanceModuleScalarWhereInput[]
    NOT?: InstitutionInstanceModuleScalarWhereInput | InstitutionInstanceModuleScalarWhereInput[]
    id?: StringFilter<"InstitutionInstanceModule"> | string
    createdAt?: DateTimeFilter<"InstitutionInstanceModule"> | Date | string
    updatedAt?: DateTimeFilter<"InstitutionInstanceModule"> | Date | string
    baseURL?: StringFilter<"InstitutionInstanceModule"> | string
    isEnabled?: BoolFilter<"InstitutionInstanceModule"> | boolean
    status?: StringFilter<"InstitutionInstanceModule"> | string
    apiKey?: StringNullableFilter<"InstitutionInstanceModule"> | string | null
    expectedMajorVersion?: IntFilter<"InstitutionInstanceModule"> | number
    expectedMinorVersion?: IntFilter<"InstitutionInstanceModule"> | number
    instanceId?: StringFilter<"InstitutionInstanceModule"> | string
    typeId?: StringFilter<"InstitutionInstanceModule"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutInstanceInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutInstanceInput, UserUncheckedUpdateWithoutInstanceInput>
    create: XOR<UserCreateWithoutInstanceInput, UserUncheckedCreateWithoutInstanceInput>
  }

  export type UserUpdateWithWhereUniqueWithoutInstanceInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutInstanceInput, UserUncheckedUpdateWithoutInstanceInput>
  }

  export type UserUpdateManyWithWhereWithoutInstanceInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutInstanceInput>
  }

  export type ExternalLinksUpsertWithWhereUniqueWithoutInstitutionInstanceInput = {
    where: ExternalLinksWhereUniqueInput
    update: XOR<ExternalLinksUpdateWithoutInstitutionInstanceInput, ExternalLinksUncheckedUpdateWithoutInstitutionInstanceInput>
    create: XOR<ExternalLinksCreateWithoutInstitutionInstanceInput, ExternalLinksUncheckedCreateWithoutInstitutionInstanceInput>
  }

  export type ExternalLinksUpdateWithWhereUniqueWithoutInstitutionInstanceInput = {
    where: ExternalLinksWhereUniqueInput
    data: XOR<ExternalLinksUpdateWithoutInstitutionInstanceInput, ExternalLinksUncheckedUpdateWithoutInstitutionInstanceInput>
  }

  export type ExternalLinksUpdateManyWithWhereWithoutInstitutionInstanceInput = {
    where: ExternalLinksScalarWhereInput
    data: XOR<ExternalLinksUpdateManyMutationInput, ExternalLinksUncheckedUpdateManyWithoutInstitutionInstanceInput>
  }

  export type ExternalLinksScalarWhereInput = {
    AND?: ExternalLinksScalarWhereInput | ExternalLinksScalarWhereInput[]
    OR?: ExternalLinksScalarWhereInput[]
    NOT?: ExternalLinksScalarWhereInput | ExternalLinksScalarWhereInput[]
    id?: StringFilter<"ExternalLinks"> | string
    createdAt?: DateTimeFilter<"ExternalLinks"> | Date | string
    updatedAt?: DateTimeFilter<"ExternalLinks"> | Date | string
    url?: StringFilter<"ExternalLinks"> | string
    name?: StringFilter<"ExternalLinks"> | string
    emoji?: StringFilter<"ExternalLinks"> | string
    scope?: EnumExternalLinkScopeFilter<"ExternalLinks"> | $Enums.ExternalLinkScope
    institutionInstanceId?: StringNullableFilter<"ExternalLinks"> | string | null
  }

  export type InstitutionInstanceCreateWithoutModulesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institutionName: string
    institutionSlug: string
    User?: UserCreateNestedManyWithoutInstanceInput
    externalLinks?: ExternalLinksCreateNestedManyWithoutInstitutionInstanceInput
  }

  export type InstitutionInstanceUncheckedCreateWithoutModulesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institutionName: string
    institutionSlug: string
    User?: UserUncheckedCreateNestedManyWithoutInstanceInput
    externalLinks?: ExternalLinksUncheckedCreateNestedManyWithoutInstitutionInstanceInput
  }

  export type InstitutionInstanceCreateOrConnectWithoutModulesInput = {
    where: InstitutionInstanceWhereUniqueInput
    create: XOR<InstitutionInstanceCreateWithoutModulesInput, InstitutionInstanceUncheckedCreateWithoutModulesInput>
  }

  export type InstitutionInstanceModuleTypeCreateWithoutInstitutionInstanceModuleInput = {
    id?: string
    slug: string
    name: string
  }

  export type InstitutionInstanceModuleTypeUncheckedCreateWithoutInstitutionInstanceModuleInput = {
    id?: string
    slug: string
    name: string
  }

  export type InstitutionInstanceModuleTypeCreateOrConnectWithoutInstitutionInstanceModuleInput = {
    where: InstitutionInstanceModuleTypeWhereUniqueInput
    create: XOR<InstitutionInstanceModuleTypeCreateWithoutInstitutionInstanceModuleInput, InstitutionInstanceModuleTypeUncheckedCreateWithoutInstitutionInstanceModuleInput>
  }

  export type InstitutionInstanceUpsertWithoutModulesInput = {
    update: XOR<InstitutionInstanceUpdateWithoutModulesInput, InstitutionInstanceUncheckedUpdateWithoutModulesInput>
    create: XOR<InstitutionInstanceCreateWithoutModulesInput, InstitutionInstanceUncheckedCreateWithoutModulesInput>
    where?: InstitutionInstanceWhereInput
  }

  export type InstitutionInstanceUpdateToOneWithWhereWithoutModulesInput = {
    where?: InstitutionInstanceWhereInput
    data: XOR<InstitutionInstanceUpdateWithoutModulesInput, InstitutionInstanceUncheckedUpdateWithoutModulesInput>
  }

  export type InstitutionInstanceUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionSlug?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutInstanceNestedInput
    externalLinks?: ExternalLinksUpdateManyWithoutInstitutionInstanceNestedInput
  }

  export type InstitutionInstanceUncheckedUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionSlug?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutInstanceNestedInput
    externalLinks?: ExternalLinksUncheckedUpdateManyWithoutInstitutionInstanceNestedInput
  }

  export type InstitutionInstanceModuleTypeUpsertWithoutInstitutionInstanceModuleInput = {
    update: XOR<InstitutionInstanceModuleTypeUpdateWithoutInstitutionInstanceModuleInput, InstitutionInstanceModuleTypeUncheckedUpdateWithoutInstitutionInstanceModuleInput>
    create: XOR<InstitutionInstanceModuleTypeCreateWithoutInstitutionInstanceModuleInput, InstitutionInstanceModuleTypeUncheckedCreateWithoutInstitutionInstanceModuleInput>
    where?: InstitutionInstanceModuleTypeWhereInput
  }

  export type InstitutionInstanceModuleTypeUpdateToOneWithWhereWithoutInstitutionInstanceModuleInput = {
    where?: InstitutionInstanceModuleTypeWhereInput
    data: XOR<InstitutionInstanceModuleTypeUpdateWithoutInstitutionInstanceModuleInput, InstitutionInstanceModuleTypeUncheckedUpdateWithoutInstitutionInstanceModuleInput>
  }

  export type InstitutionInstanceModuleTypeUpdateWithoutInstitutionInstanceModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionInstanceModuleTypeUncheckedUpdateWithoutInstitutionInstanceModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionInstanceModuleCreateWithoutTypeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseURL: string
    isEnabled?: boolean
    status: string
    apiKey?: string | null
    expectedMajorVersion: number
    expectedMinorVersion: number
    instance: InstitutionInstanceCreateNestedOneWithoutModulesInput
  }

  export type InstitutionInstanceModuleUncheckedCreateWithoutTypeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseURL: string
    isEnabled?: boolean
    status: string
    apiKey?: string | null
    expectedMajorVersion: number
    expectedMinorVersion: number
    instanceId: string
  }

  export type InstitutionInstanceModuleCreateOrConnectWithoutTypeInput = {
    where: InstitutionInstanceModuleWhereUniqueInput
    create: XOR<InstitutionInstanceModuleCreateWithoutTypeInput, InstitutionInstanceModuleUncheckedCreateWithoutTypeInput>
  }

  export type InstitutionInstanceModuleCreateManyTypeInputEnvelope = {
    data: InstitutionInstanceModuleCreateManyTypeInput | InstitutionInstanceModuleCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type InstitutionInstanceModuleUpsertWithWhereUniqueWithoutTypeInput = {
    where: InstitutionInstanceModuleWhereUniqueInput
    update: XOR<InstitutionInstanceModuleUpdateWithoutTypeInput, InstitutionInstanceModuleUncheckedUpdateWithoutTypeInput>
    create: XOR<InstitutionInstanceModuleCreateWithoutTypeInput, InstitutionInstanceModuleUncheckedCreateWithoutTypeInput>
  }

  export type InstitutionInstanceModuleUpdateWithWhereUniqueWithoutTypeInput = {
    where: InstitutionInstanceModuleWhereUniqueInput
    data: XOR<InstitutionInstanceModuleUpdateWithoutTypeInput, InstitutionInstanceModuleUncheckedUpdateWithoutTypeInput>
  }

  export type InstitutionInstanceModuleUpdateManyWithWhereWithoutTypeInput = {
    where: InstitutionInstanceModuleScalarWhereInput
    data: XOR<InstitutionInstanceModuleUpdateManyMutationInput, InstitutionInstanceModuleUncheckedUpdateManyWithoutTypeInput>
  }

  export type EmailCreateManyUserInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    createdAt?: Date | string
    passwordHash: string
    instanceId?: string | null
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emails?: EmailUpdateManyWithoutUserNestedInput
    instance?: InstitutionInstanceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    instanceId?: NullableStringFieldUpdateOperationsInput | string | null
    emails?: EmailUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    instanceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionInstanceModuleCreateManyInstanceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseURL: string
    isEnabled?: boolean
    status: string
    apiKey?: string | null
    expectedMajorVersion: number
    expectedMinorVersion: number
    typeId: string
  }

  export type UserCreateManyInstanceInput = {
    id?: string
    createdAt?: Date | string
    passwordHash: string
    roleId: string
  }

  export type ExternalLinksCreateManyInstitutionInstanceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    name: string
    emoji: string
    scope: $Enums.ExternalLinkScope
  }

  export type InstitutionInstanceModuleUpdateWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseURL?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMajorVersion?: IntFieldUpdateOperationsInput | number
    expectedMinorVersion?: IntFieldUpdateOperationsInput | number
    type?: InstitutionInstanceModuleTypeUpdateOneRequiredWithoutInstitutionInstanceModuleNestedInput
  }

  export type InstitutionInstanceModuleUncheckedUpdateWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseURL?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMajorVersion?: IntFieldUpdateOperationsInput | number
    expectedMinorVersion?: IntFieldUpdateOperationsInput | number
    typeId?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionInstanceModuleUncheckedUpdateManyWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseURL?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMajorVersion?: IntFieldUpdateOperationsInput | number
    expectedMinorVersion?: IntFieldUpdateOperationsInput | number
    typeId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emails?: EmailUpdateManyWithoutUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    emails?: EmailUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalLinksUpdateWithoutInstitutionInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    scope?: EnumExternalLinkScopeFieldUpdateOperationsInput | $Enums.ExternalLinkScope
  }

  export type ExternalLinksUncheckedUpdateWithoutInstitutionInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    scope?: EnumExternalLinkScopeFieldUpdateOperationsInput | $Enums.ExternalLinkScope
  }

  export type ExternalLinksUncheckedUpdateManyWithoutInstitutionInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    scope?: EnumExternalLinkScopeFieldUpdateOperationsInput | $Enums.ExternalLinkScope
  }

  export type InstitutionInstanceModuleCreateManyTypeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseURL: string
    isEnabled?: boolean
    status: string
    apiKey?: string | null
    expectedMajorVersion: number
    expectedMinorVersion: number
    instanceId: string
  }

  export type InstitutionInstanceModuleUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseURL?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMajorVersion?: IntFieldUpdateOperationsInput | number
    expectedMinorVersion?: IntFieldUpdateOperationsInput | number
    instance?: InstitutionInstanceUpdateOneRequiredWithoutModulesNestedInput
  }

  export type InstitutionInstanceModuleUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseURL?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMajorVersion?: IntFieldUpdateOperationsInput | number
    expectedMinorVersion?: IntFieldUpdateOperationsInput | number
    instanceId?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionInstanceModuleUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseURL?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    expectedMajorVersion?: IntFieldUpdateOperationsInput | number
    expectedMinorVersion?: IntFieldUpdateOperationsInput | number
    instanceId?: StringFieldUpdateOperationsInput | string
  }



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