/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { ScalarsEnumsHash } from 'gqless';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
}

/** Boolean expression to filter rows from the table "lists". All fields are combined with a logical 'AND'. */
export interface lists_bool_exp {
  _and?: Maybe<Array<lists_bool_exp>>;
  _not?: Maybe<lists_bool_exp>;
  _or?: Maybe<Array<lists_bool_exp>>;
  id?: Maybe<Int_comparison_exp>;
  name?: Maybe<String_comparison_exp>;
  tasks?: Maybe<tasks_bool_exp>;
}

/** unique or primary key constraints on table "lists" */
export enum lists_constraint {
  /** unique or primary key constraint */
  lists_pkey = 'lists_pkey',
}

/** input type for incrementing numeric columns in table "lists" */
export interface lists_inc_input {
  id?: Maybe<Scalars['Int']>;
}

/** input type for inserting data into table "lists" */
export interface lists_insert_input {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  tasks?: Maybe<tasks_arr_rel_insert_input>;
}

/** input type for inserting object relation for remote table "lists" */
export interface lists_obj_rel_insert_input {
  data: lists_insert_input;
  /** on conflict condition */
  on_conflict?: Maybe<lists_on_conflict>;
}

/** on conflict condition type for table "lists" */
export interface lists_on_conflict {
  constraint: lists_constraint;
  update_columns: Array<lists_update_column>;
  where?: Maybe<lists_bool_exp>;
}

/** Ordering options when selecting data from "lists". */
export interface lists_order_by {
  id?: Maybe<order_by>;
  name?: Maybe<order_by>;
  tasks_aggregate?: Maybe<tasks_aggregate_order_by>;
}

/** primary key columns input for table: lists */
export interface lists_pk_columns_input {
  id: Scalars['Int'];
}

/** select columns of table "lists" */
export enum lists_select_column {
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
}

/** input type for updating data in table "lists" */
export interface lists_set_input {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

/** update columns of table "lists" */
export enum lists_update_column {
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
}

/** column ordering options */
export enum order_by {
  /** in ascending order, nulls last */
  asc = 'asc',
  /** in ascending order, nulls first */
  asc_nulls_first = 'asc_nulls_first',
  /** in ascending order, nulls last */
  asc_nulls_last = 'asc_nulls_last',
  /** in descending order, nulls first */
  desc = 'desc',
  /** in descending order, nulls first */
  desc_nulls_first = 'desc_nulls_first',
  /** in descending order, nulls last */
  desc_nulls_last = 'desc_nulls_last',
}

/** order by aggregate values of table "tasks" */
export interface tasks_aggregate_order_by {
  avg?: Maybe<tasks_avg_order_by>;
  count?: Maybe<order_by>;
  max?: Maybe<tasks_max_order_by>;
  min?: Maybe<tasks_min_order_by>;
  stddev?: Maybe<tasks_stddev_order_by>;
  stddev_pop?: Maybe<tasks_stddev_pop_order_by>;
  stddev_samp?: Maybe<tasks_stddev_samp_order_by>;
  sum?: Maybe<tasks_sum_order_by>;
  var_pop?: Maybe<tasks_var_pop_order_by>;
  var_samp?: Maybe<tasks_var_samp_order_by>;
  variance?: Maybe<tasks_variance_order_by>;
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface tasks_append_input {
  details?: Maybe<Scalars['jsonb']>;
}

/** input type for inserting array relation for remote table "tasks" */
export interface tasks_arr_rel_insert_input {
  data: Array<tasks_insert_input>;
  /** on conflict condition */
  on_conflict?: Maybe<tasks_on_conflict>;
}

/** order by avg() on columns of table "tasks" */
export interface tasks_avg_order_by {
  id?: Maybe<order_by>;
  list_id?: Maybe<order_by>;
}

/** Boolean expression to filter rows from the table "tasks". All fields are combined with a logical 'AND'. */
export interface tasks_bool_exp {
  _and?: Maybe<Array<tasks_bool_exp>>;
  _not?: Maybe<tasks_bool_exp>;
  _or?: Maybe<Array<tasks_bool_exp>>;
  details?: Maybe<jsonb_comparison_exp>;
  id?: Maybe<Int_comparison_exp>;
  list?: Maybe<lists_bool_exp>;
  list_id?: Maybe<Int_comparison_exp>;
  name?: Maybe<String_comparison_exp>;
}

/** unique or primary key constraints on table "tasks" */
export enum tasks_constraint {
  /** unique or primary key constraint */
  tasks_pkey = 'tasks_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface tasks_delete_at_path_input {
  details?: Maybe<Array<Scalars['String']>>;
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface tasks_delete_elem_input {
  details?: Maybe<Scalars['Int']>;
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface tasks_delete_key_input {
  details?: Maybe<Scalars['String']>;
}

/** input type for incrementing numeric columns in table "tasks" */
export interface tasks_inc_input {
  id?: Maybe<Scalars['Int']>;
  list_id?: Maybe<Scalars['Int']>;
}

/** input type for inserting data into table "tasks" */
export interface tasks_insert_input {
  details?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  list?: Maybe<lists_obj_rel_insert_input>;
  list_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "tasks" */
export interface tasks_max_order_by {
  id?: Maybe<order_by>;
  list_id?: Maybe<order_by>;
  name?: Maybe<order_by>;
}

/** order by min() on columns of table "tasks" */
export interface tasks_min_order_by {
  id?: Maybe<order_by>;
  list_id?: Maybe<order_by>;
  name?: Maybe<order_by>;
}

/** on conflict condition type for table "tasks" */
export interface tasks_on_conflict {
  constraint: tasks_constraint;
  update_columns: Array<tasks_update_column>;
  where?: Maybe<tasks_bool_exp>;
}

/** Ordering options when selecting data from "tasks". */
export interface tasks_order_by {
  details?: Maybe<order_by>;
  id?: Maybe<order_by>;
  list?: Maybe<lists_order_by>;
  list_id?: Maybe<order_by>;
  name?: Maybe<order_by>;
}

/** primary key columns input for table: tasks */
export interface tasks_pk_columns_input {
  id: Scalars['Int'];
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface tasks_prepend_input {
  details?: Maybe<Scalars['jsonb']>;
}

/** select columns of table "tasks" */
export enum tasks_select_column {
  /** column name */
  details = 'details',
  /** column name */
  id = 'id',
  /** column name */
  list_id = 'list_id',
  /** column name */
  name = 'name',
}

/** input type for updating data in table "tasks" */
export interface tasks_set_input {
  details?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  list_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

/** order by stddev() on columns of table "tasks" */
export interface tasks_stddev_order_by {
  id?: Maybe<order_by>;
  list_id?: Maybe<order_by>;
}

/** order by stddev_pop() on columns of table "tasks" */
export interface tasks_stddev_pop_order_by {
  id?: Maybe<order_by>;
  list_id?: Maybe<order_by>;
}

/** order by stddev_samp() on columns of table "tasks" */
export interface tasks_stddev_samp_order_by {
  id?: Maybe<order_by>;
  list_id?: Maybe<order_by>;
}

/** order by sum() on columns of table "tasks" */
export interface tasks_sum_order_by {
  id?: Maybe<order_by>;
  list_id?: Maybe<order_by>;
}

/** update columns of table "tasks" */
export enum tasks_update_column {
  /** column name */
  details = 'details',
  /** column name */
  id = 'id',
  /** column name */
  list_id = 'list_id',
  /** column name */
  name = 'name',
}

/** order by var_pop() on columns of table "tasks" */
export interface tasks_var_pop_order_by {
  id?: Maybe<order_by>;
  list_id?: Maybe<order_by>;
}

/** order by var_samp() on columns of table "tasks" */
export interface tasks_var_samp_order_by {
  id?: Maybe<order_by>;
  list_id?: Maybe<order_by>;
}

/** order by variance() on columns of table "tasks" */
export interface tasks_variance_order_by {
  id?: Maybe<order_by>;
  list_id?: Maybe<order_by>;
}

export const scalarsEnumsHash: ScalarsEnumsHash = {
  Boolean: true,
  Float: true,
  Int: true,
  String: true,
  jsonb: true,
  lists_constraint: true,
  lists_select_column: true,
  lists_update_column: true,
  order_by: true,
  tasks_constraint: true,
  tasks_select_column: true,
  tasks_update_column: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: 'String!' },
    lists: {
      __type: '[lists!]!',
      __args: {
        distinct_on: '[lists_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[lists_order_by!]',
        where: 'lists_bool_exp',
      },
    },
    lists_aggregate: {
      __type: 'lists_aggregate!',
      __args: {
        distinct_on: '[lists_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[lists_order_by!]',
        where: 'lists_bool_exp',
      },
    },
    lists_by_pk: { __type: 'lists', __args: { id: 'Int!' } },
    tasks: {
      __type: '[tasks!]!',
      __args: {
        distinct_on: '[tasks_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tasks_order_by!]',
        where: 'tasks_bool_exp',
      },
    },
    tasks_aggregate: {
      __type: 'tasks_aggregate!',
      __args: {
        distinct_on: '[tasks_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tasks_order_by!]',
        where: 'tasks_bool_exp',
      },
    },
    tasks_by_pk: { __type: 'tasks', __args: { id: 'Int!' } },
  },
  mutation: {
    __typename: { __type: 'String!' },
    delete_lists: {
      __type: 'lists_mutation_response',
      __args: { where: 'lists_bool_exp!' },
    },
    delete_lists_by_pk: { __type: 'lists', __args: { id: 'Int!' } },
    delete_tasks: {
      __type: 'tasks_mutation_response',
      __args: { where: 'tasks_bool_exp!' },
    },
    delete_tasks_by_pk: { __type: 'tasks', __args: { id: 'Int!' } },
    insert_lists: {
      __type: 'lists_mutation_response',
      __args: {
        objects: '[lists_insert_input!]!',
        on_conflict: 'lists_on_conflict',
      },
    },
    insert_lists_one: {
      __type: 'lists',
      __args: {
        object: 'lists_insert_input!',
        on_conflict: 'lists_on_conflict',
      },
    },
    insert_tasks: {
      __type: 'tasks_mutation_response',
      __args: {
        objects: '[tasks_insert_input!]!',
        on_conflict: 'tasks_on_conflict',
      },
    },
    insert_tasks_one: {
      __type: 'tasks',
      __args: {
        object: 'tasks_insert_input!',
        on_conflict: 'tasks_on_conflict',
      },
    },
    update_lists: {
      __type: 'lists_mutation_response',
      __args: {
        _inc: 'lists_inc_input',
        _set: 'lists_set_input',
        where: 'lists_bool_exp!',
      },
    },
    update_lists_by_pk: {
      __type: 'lists',
      __args: {
        _inc: 'lists_inc_input',
        _set: 'lists_set_input',
        pk_columns: 'lists_pk_columns_input!',
      },
    },
    update_tasks: {
      __type: 'tasks_mutation_response',
      __args: {
        _append: 'tasks_append_input',
        _delete_at_path: 'tasks_delete_at_path_input',
        _delete_elem: 'tasks_delete_elem_input',
        _delete_key: 'tasks_delete_key_input',
        _inc: 'tasks_inc_input',
        _prepend: 'tasks_prepend_input',
        _set: 'tasks_set_input',
        where: 'tasks_bool_exp!',
      },
    },
    update_tasks_by_pk: {
      __type: 'tasks',
      __args: {
        _append: 'tasks_append_input',
        _delete_at_path: 'tasks_delete_at_path_input',
        _delete_elem: 'tasks_delete_elem_input',
        _delete_key: 'tasks_delete_key_input',
        _inc: 'tasks_inc_input',
        _prepend: 'tasks_prepend_input',
        _set: 'tasks_set_input',
        pk_columns: 'tasks_pk_columns_input!',
      },
    },
  },
  subscription: {
    __typename: { __type: 'String!' },
    lists: {
      __type: '[lists!]!',
      __args: {
        distinct_on: '[lists_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[lists_order_by!]',
        where: 'lists_bool_exp',
      },
    },
    lists_aggregate: {
      __type: 'lists_aggregate!',
      __args: {
        distinct_on: '[lists_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[lists_order_by!]',
        where: 'lists_bool_exp',
      },
    },
    lists_by_pk: { __type: 'lists', __args: { id: 'Int!' } },
    tasks: {
      __type: '[tasks!]!',
      __args: {
        distinct_on: '[tasks_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tasks_order_by!]',
        where: 'tasks_bool_exp',
      },
    },
    tasks_aggregate: {
      __type: 'tasks_aggregate!',
      __args: {
        distinct_on: '[tasks_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tasks_order_by!]',
        where: 'tasks_bool_exp',
      },
    },
    tasks_by_pk: { __type: 'tasks', __args: { id: 'Int!' } },
  },
  Int_comparison_exp: {
    _eq: { __type: 'Int' },
    _gt: { __type: 'Int' },
    _gte: { __type: 'Int' },
    _in: { __type: '[Int!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'Int' },
    _lte: { __type: 'Int' },
    _neq: { __type: 'Int' },
    _nin: { __type: '[Int!]' },
  },
  String_comparison_exp: {
    _eq: { __type: 'String' },
    _gt: { __type: 'String' },
    _gte: { __type: 'String' },
    _ilike: { __type: 'String' },
    _in: { __type: '[String!]' },
    _iregex: { __type: 'String' },
    _is_null: { __type: 'Boolean' },
    _like: { __type: 'String' },
    _lt: { __type: 'String' },
    _lte: { __type: 'String' },
    _neq: { __type: 'String' },
    _nilike: { __type: 'String' },
    _nin: { __type: '[String!]' },
    _niregex: { __type: 'String' },
    _nlike: { __type: 'String' },
    _nregex: { __type: 'String' },
    _nsimilar: { __type: 'String' },
    _regex: { __type: 'String' },
    _similar: { __type: 'String' },
  },
  jsonb_comparison_exp: {
    _contained_in: { __type: 'jsonb' },
    _contains: { __type: 'jsonb' },
    _eq: { __type: 'jsonb' },
    _gt: { __type: 'jsonb' },
    _gte: { __type: 'jsonb' },
    _has_key: { __type: 'String' },
    _has_keys_all: { __type: '[String!]' },
    _has_keys_any: { __type: '[String!]' },
    _in: { __type: '[jsonb!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'jsonb' },
    _lte: { __type: 'jsonb' },
    _neq: { __type: 'jsonb' },
    _nin: { __type: '[jsonb!]' },
  },
  lists: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int!' },
    name: { __type: 'String!' },
    tasks: {
      __type: '[tasks!]!',
      __args: {
        distinct_on: '[tasks_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tasks_order_by!]',
        where: 'tasks_bool_exp',
      },
    },
    tasks_aggregate: {
      __type: 'tasks_aggregate!',
      __args: {
        distinct_on: '[tasks_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tasks_order_by!]',
        where: 'tasks_bool_exp',
      },
    },
  },
  lists_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'lists_aggregate_fields' },
    nodes: { __type: '[lists!]!' },
  },
  lists_aggregate_fields: {
    __typename: { __type: 'String!' },
    avg: { __type: 'lists_avg_fields' },
    count: {
      __type: 'Int!',
      __args: { columns: '[lists_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'lists_max_fields' },
    min: { __type: 'lists_min_fields' },
    stddev: { __type: 'lists_stddev_fields' },
    stddev_pop: { __type: 'lists_stddev_pop_fields' },
    stddev_samp: { __type: 'lists_stddev_samp_fields' },
    sum: { __type: 'lists_sum_fields' },
    var_pop: { __type: 'lists_var_pop_fields' },
    var_samp: { __type: 'lists_var_samp_fields' },
    variance: { __type: 'lists_variance_fields' },
  },
  lists_avg_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
  },
  lists_bool_exp: {
    _and: { __type: '[lists_bool_exp!]' },
    _not: { __type: 'lists_bool_exp' },
    _or: { __type: '[lists_bool_exp!]' },
    id: { __type: 'Int_comparison_exp' },
    name: { __type: 'String_comparison_exp' },
    tasks: { __type: 'tasks_bool_exp' },
  },
  lists_inc_input: { id: { __type: 'Int' } },
  lists_insert_input: {
    id: { __type: 'Int' },
    name: { __type: 'String' },
    tasks: { __type: 'tasks_arr_rel_insert_input' },
  },
  lists_max_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int' },
    name: { __type: 'String' },
  },
  lists_min_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int' },
    name: { __type: 'String' },
  },
  lists_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[lists!]!' },
  },
  lists_obj_rel_insert_input: {
    data: { __type: 'lists_insert_input!' },
    on_conflict: { __type: 'lists_on_conflict' },
  },
  lists_on_conflict: {
    constraint: { __type: 'lists_constraint!' },
    update_columns: { __type: '[lists_update_column!]!' },
    where: { __type: 'lists_bool_exp' },
  },
  lists_order_by: {
    id: { __type: 'order_by' },
    name: { __type: 'order_by' },
    tasks_aggregate: { __type: 'tasks_aggregate_order_by' },
  },
  lists_pk_columns_input: { id: { __type: 'Int!' } },
  lists_set_input: { id: { __type: 'Int' }, name: { __type: 'String' } },
  lists_stddev_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
  },
  lists_stddev_pop_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
  },
  lists_stddev_samp_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
  },
  lists_sum_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int' },
  },
  lists_var_pop_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
  },
  lists_var_samp_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
  },
  lists_variance_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
  },
  tasks: {
    __typename: { __type: 'String!' },
    details: { __type: 'jsonb!', __args: { path: 'String' } },
    id: { __type: 'Int!' },
    list: { __type: 'lists!' },
    list_id: { __type: 'Int!' },
    name: { __type: 'String!' },
  },
  tasks_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'tasks_aggregate_fields' },
    nodes: { __type: '[tasks!]!' },
  },
  tasks_aggregate_fields: {
    __typename: { __type: 'String!' },
    avg: { __type: 'tasks_avg_fields' },
    count: {
      __type: 'Int!',
      __args: { columns: '[tasks_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'tasks_max_fields' },
    min: { __type: 'tasks_min_fields' },
    stddev: { __type: 'tasks_stddev_fields' },
    stddev_pop: { __type: 'tasks_stddev_pop_fields' },
    stddev_samp: { __type: 'tasks_stddev_samp_fields' },
    sum: { __type: 'tasks_sum_fields' },
    var_pop: { __type: 'tasks_var_pop_fields' },
    var_samp: { __type: 'tasks_var_samp_fields' },
    variance: { __type: 'tasks_variance_fields' },
  },
  tasks_aggregate_order_by: {
    avg: { __type: 'tasks_avg_order_by' },
    count: { __type: 'order_by' },
    max: { __type: 'tasks_max_order_by' },
    min: { __type: 'tasks_min_order_by' },
    stddev: { __type: 'tasks_stddev_order_by' },
    stddev_pop: { __type: 'tasks_stddev_pop_order_by' },
    stddev_samp: { __type: 'tasks_stddev_samp_order_by' },
    sum: { __type: 'tasks_sum_order_by' },
    var_pop: { __type: 'tasks_var_pop_order_by' },
    var_samp: { __type: 'tasks_var_samp_order_by' },
    variance: { __type: 'tasks_variance_order_by' },
  },
  tasks_append_input: { details: { __type: 'jsonb' } },
  tasks_arr_rel_insert_input: {
    data: { __type: '[tasks_insert_input!]!' },
    on_conflict: { __type: 'tasks_on_conflict' },
  },
  tasks_avg_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
    list_id: { __type: 'Float' },
  },
  tasks_avg_order_by: {
    id: { __type: 'order_by' },
    list_id: { __type: 'order_by' },
  },
  tasks_bool_exp: {
    _and: { __type: '[tasks_bool_exp!]' },
    _not: { __type: 'tasks_bool_exp' },
    _or: { __type: '[tasks_bool_exp!]' },
    details: { __type: 'jsonb_comparison_exp' },
    id: { __type: 'Int_comparison_exp' },
    list: { __type: 'lists_bool_exp' },
    list_id: { __type: 'Int_comparison_exp' },
    name: { __type: 'String_comparison_exp' },
  },
  tasks_delete_at_path_input: { details: { __type: '[String!]' } },
  tasks_delete_elem_input: { details: { __type: 'Int' } },
  tasks_delete_key_input: { details: { __type: 'String' } },
  tasks_inc_input: { id: { __type: 'Int' }, list_id: { __type: 'Int' } },
  tasks_insert_input: {
    details: { __type: 'jsonb' },
    id: { __type: 'Int' },
    list: { __type: 'lists_obj_rel_insert_input' },
    list_id: { __type: 'Int' },
    name: { __type: 'String' },
  },
  tasks_max_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int' },
    list_id: { __type: 'Int' },
    name: { __type: 'String' },
  },
  tasks_max_order_by: {
    id: { __type: 'order_by' },
    list_id: { __type: 'order_by' },
    name: { __type: 'order_by' },
  },
  tasks_min_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int' },
    list_id: { __type: 'Int' },
    name: { __type: 'String' },
  },
  tasks_min_order_by: {
    id: { __type: 'order_by' },
    list_id: { __type: 'order_by' },
    name: { __type: 'order_by' },
  },
  tasks_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[tasks!]!' },
  },
  tasks_on_conflict: {
    constraint: { __type: 'tasks_constraint!' },
    update_columns: { __type: '[tasks_update_column!]!' },
    where: { __type: 'tasks_bool_exp' },
  },
  tasks_order_by: {
    details: { __type: 'order_by' },
    id: { __type: 'order_by' },
    list: { __type: 'lists_order_by' },
    list_id: { __type: 'order_by' },
    name: { __type: 'order_by' },
  },
  tasks_pk_columns_input: { id: { __type: 'Int!' } },
  tasks_prepend_input: { details: { __type: 'jsonb' } },
  tasks_set_input: {
    details: { __type: 'jsonb' },
    id: { __type: 'Int' },
    list_id: { __type: 'Int' },
    name: { __type: 'String' },
  },
  tasks_stddev_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
    list_id: { __type: 'Float' },
  },
  tasks_stddev_order_by: {
    id: { __type: 'order_by' },
    list_id: { __type: 'order_by' },
  },
  tasks_stddev_pop_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
    list_id: { __type: 'Float' },
  },
  tasks_stddev_pop_order_by: {
    id: { __type: 'order_by' },
    list_id: { __type: 'order_by' },
  },
  tasks_stddev_samp_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
    list_id: { __type: 'Float' },
  },
  tasks_stddev_samp_order_by: {
    id: { __type: 'order_by' },
    list_id: { __type: 'order_by' },
  },
  tasks_sum_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int' },
    list_id: { __type: 'Int' },
  },
  tasks_sum_order_by: {
    id: { __type: 'order_by' },
    list_id: { __type: 'order_by' },
  },
  tasks_var_pop_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
    list_id: { __type: 'Float' },
  },
  tasks_var_pop_order_by: {
    id: { __type: 'order_by' },
    list_id: { __type: 'order_by' },
  },
  tasks_var_samp_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
    list_id: { __type: 'Float' },
  },
  tasks_var_samp_order_by: {
    id: { __type: 'order_by' },
    list_id: { __type: 'order_by' },
  },
  tasks_variance_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'Float' },
    list_id: { __type: 'Float' },
  },
  tasks_variance_order_by: {
    id: { __type: 'order_by' },
    list_id: { __type: 'order_by' },
  },
} as const;

export interface Query {
  __typename: 'Query' | undefined;
  lists: (args?: {
    distinct_on?: Maybe<Array<lists_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<lists_order_by>>;
    where?: Maybe<lists_bool_exp>;
  }) => Array<lists>;
  lists_aggregate: (args?: {
    distinct_on?: Maybe<Array<lists_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<lists_order_by>>;
    where?: Maybe<lists_bool_exp>;
  }) => lists_aggregate;
  lists_by_pk: (args: { id: Scalars['Int'] }) => Maybe<lists>;
  tasks: (args?: {
    distinct_on?: Maybe<Array<tasks_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<tasks_order_by>>;
    where?: Maybe<tasks_bool_exp>;
  }) => Array<tasks>;
  tasks_aggregate: (args?: {
    distinct_on?: Maybe<Array<tasks_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<tasks_order_by>>;
    where?: Maybe<tasks_bool_exp>;
  }) => tasks_aggregate;
  tasks_by_pk: (args: { id: Scalars['Int'] }) => Maybe<tasks>;
}

export interface Mutation {
  __typename: 'Mutation' | undefined;
  delete_lists: (args: {
    where: lists_bool_exp;
  }) => Maybe<lists_mutation_response>;
  delete_lists_by_pk: (args: { id: Scalars['Int'] }) => Maybe<lists>;
  delete_tasks: (args: {
    where: tasks_bool_exp;
  }) => Maybe<tasks_mutation_response>;
  delete_tasks_by_pk: (args: { id: Scalars['Int'] }) => Maybe<tasks>;
  insert_lists: (args: {
    objects: Array<lists_insert_input>;
    on_conflict?: Maybe<lists_on_conflict>;
  }) => Maybe<lists_mutation_response>;
  insert_lists_one: (args: {
    object: lists_insert_input;
    on_conflict?: Maybe<lists_on_conflict>;
  }) => Maybe<lists>;
  insert_tasks: (args: {
    objects: Array<tasks_insert_input>;
    on_conflict?: Maybe<tasks_on_conflict>;
  }) => Maybe<tasks_mutation_response>;
  insert_tasks_one: (args: {
    object: tasks_insert_input;
    on_conflict?: Maybe<tasks_on_conflict>;
  }) => Maybe<tasks>;
  update_lists: (args: {
    _inc?: Maybe<lists_inc_input>;
    _set?: Maybe<lists_set_input>;
    where: lists_bool_exp;
  }) => Maybe<lists_mutation_response>;
  update_lists_by_pk: (args: {
    _inc?: Maybe<lists_inc_input>;
    _set?: Maybe<lists_set_input>;
    pk_columns: lists_pk_columns_input;
  }) => Maybe<lists>;
  update_tasks: (args: {
    _append?: Maybe<tasks_append_input>;
    _delete_at_path?: Maybe<tasks_delete_at_path_input>;
    _delete_elem?: Maybe<tasks_delete_elem_input>;
    _delete_key?: Maybe<tasks_delete_key_input>;
    _inc?: Maybe<tasks_inc_input>;
    _prepend?: Maybe<tasks_prepend_input>;
    _set?: Maybe<tasks_set_input>;
    where: tasks_bool_exp;
  }) => Maybe<tasks_mutation_response>;
  update_tasks_by_pk: (args: {
    _append?: Maybe<tasks_append_input>;
    _delete_at_path?: Maybe<tasks_delete_at_path_input>;
    _delete_elem?: Maybe<tasks_delete_elem_input>;
    _delete_key?: Maybe<tasks_delete_key_input>;
    _inc?: Maybe<tasks_inc_input>;
    _prepend?: Maybe<tasks_prepend_input>;
    _set?: Maybe<tasks_set_input>;
    pk_columns: tasks_pk_columns_input;
  }) => Maybe<tasks>;
}

export interface Subscription {
  __typename: 'Subscription' | undefined;
  lists: (args?: {
    distinct_on?: Maybe<Array<lists_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<lists_order_by>>;
    where?: Maybe<lists_bool_exp>;
  }) => Array<lists>;
  lists_aggregate: (args?: {
    distinct_on?: Maybe<Array<lists_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<lists_order_by>>;
    where?: Maybe<lists_bool_exp>;
  }) => lists_aggregate;
  lists_by_pk: (args: { id: Scalars['Int'] }) => Maybe<lists>;
  tasks: (args?: {
    distinct_on?: Maybe<Array<tasks_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<tasks_order_by>>;
    where?: Maybe<tasks_bool_exp>;
  }) => Array<tasks>;
  tasks_aggregate: (args?: {
    distinct_on?: Maybe<Array<tasks_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<tasks_order_by>>;
    where?: Maybe<tasks_bool_exp>;
  }) => tasks_aggregate;
  tasks_by_pk: (args: { id: Scalars['Int'] }) => Maybe<tasks>;
}

/**
 * columns and relationships of "lists"
 */
export interface lists {
  __typename: 'lists' | undefined;
  id: ScalarsEnums['Int'];
  name: ScalarsEnums['String'];
  /**
   * fetch data from the table: "tasks"
   */
  tasks: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<tasks_select_column>>
    /**
     * limit the number of rows returned
     */;
    limit?: Maybe<Scalars['Int']>
    /**
     * skip the first n rows. Use only with order_by
     */;
    offset?: Maybe<Scalars['Int']>
    /**
     * sort the rows by one or more columns
     */;
    order_by?: Maybe<Array<tasks_order_by>>
    /**
     * filter the rows returned
     */;
    where?: Maybe<tasks_bool_exp>;
  }) => Array<tasks>;
  /**
   * An aggregate relationship
   */
  tasks_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<tasks_select_column>>
    /**
     * limit the number of rows returned
     */;
    limit?: Maybe<Scalars['Int']>
    /**
     * skip the first n rows. Use only with order_by
     */;
    offset?: Maybe<Scalars['Int']>
    /**
     * sort the rows by one or more columns
     */;
    order_by?: Maybe<Array<tasks_order_by>>
    /**
     * filter the rows returned
     */;
    where?: Maybe<tasks_bool_exp>;
  }) => tasks_aggregate;
}

/**
 * aggregated selection of "lists"
 */
export interface lists_aggregate {
  __typename: 'lists_aggregate' | undefined;
  aggregate?: Maybe<lists_aggregate_fields>;
  nodes: Array<lists>;
}

/**
 * aggregate fields of "lists"
 */
export interface lists_aggregate_fields {
  __typename: 'lists_aggregate_fields' | undefined;
  avg?: Maybe<lists_avg_fields>;
  count: (args?: {
    columns?: Maybe<Array<lists_select_column>>;
    distinct?: Maybe<Scalars['Boolean']>;
  }) => ScalarsEnums['Int'];
  max?: Maybe<lists_max_fields>;
  min?: Maybe<lists_min_fields>;
  stddev?: Maybe<lists_stddev_fields>;
  stddev_pop?: Maybe<lists_stddev_pop_fields>;
  stddev_samp?: Maybe<lists_stddev_samp_fields>;
  sum?: Maybe<lists_sum_fields>;
  var_pop?: Maybe<lists_var_pop_fields>;
  var_samp?: Maybe<lists_var_samp_fields>;
  variance?: Maybe<lists_variance_fields>;
}

/**
 * aggregate avg on columns
 */
export interface lists_avg_fields {
  __typename: 'lists_avg_fields' | undefined;
  id?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate max on columns
 */
export interface lists_max_fields {
  __typename: 'lists_max_fields' | undefined;
  id?: Maybe<ScalarsEnums['Int']>;
  name?: Maybe<ScalarsEnums['String']>;
}

/**
 * aggregate min on columns
 */
export interface lists_min_fields {
  __typename: 'lists_min_fields' | undefined;
  id?: Maybe<ScalarsEnums['Int']>;
  name?: Maybe<ScalarsEnums['String']>;
}

/**
 * response of any mutation on the table "lists"
 */
export interface lists_mutation_response {
  __typename: 'lists_mutation_response' | undefined;
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums['Int'];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<lists>;
}

/**
 * aggregate stddev on columns
 */
export interface lists_stddev_fields {
  __typename: 'lists_stddev_fields' | undefined;
  id?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate stddev_pop on columns
 */
export interface lists_stddev_pop_fields {
  __typename: 'lists_stddev_pop_fields' | undefined;
  id?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate stddev_samp on columns
 */
export interface lists_stddev_samp_fields {
  __typename: 'lists_stddev_samp_fields' | undefined;
  id?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate sum on columns
 */
export interface lists_sum_fields {
  __typename: 'lists_sum_fields' | undefined;
  id?: Maybe<ScalarsEnums['Int']>;
}

/**
 * aggregate var_pop on columns
 */
export interface lists_var_pop_fields {
  __typename: 'lists_var_pop_fields' | undefined;
  id?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate var_samp on columns
 */
export interface lists_var_samp_fields {
  __typename: 'lists_var_samp_fields' | undefined;
  id?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate variance on columns
 */
export interface lists_variance_fields {
  __typename: 'lists_variance_fields' | undefined;
  id?: Maybe<ScalarsEnums['Float']>;
}

/**
 * columns and relationships of "tasks"
 */
export interface tasks {
  __typename: 'tasks' | undefined;
  details: (args?: {
    /**
     * JSON select path
     */
    path?: Maybe<Scalars['String']>;
  }) => ScalarsEnums['jsonb'];
  id: ScalarsEnums['Int'];
  /**
   * An object relationship
   */
  list: lists;
  list_id: ScalarsEnums['Int'];
  name: ScalarsEnums['String'];
}

/**
 * aggregated selection of "tasks"
 */
export interface tasks_aggregate {
  __typename: 'tasks_aggregate' | undefined;
  aggregate?: Maybe<tasks_aggregate_fields>;
  nodes: Array<tasks>;
}

/**
 * aggregate fields of "tasks"
 */
export interface tasks_aggregate_fields {
  __typename: 'tasks_aggregate_fields' | undefined;
  avg?: Maybe<tasks_avg_fields>;
  count: (args?: {
    columns?: Maybe<Array<tasks_select_column>>;
    distinct?: Maybe<Scalars['Boolean']>;
  }) => ScalarsEnums['Int'];
  max?: Maybe<tasks_max_fields>;
  min?: Maybe<tasks_min_fields>;
  stddev?: Maybe<tasks_stddev_fields>;
  stddev_pop?: Maybe<tasks_stddev_pop_fields>;
  stddev_samp?: Maybe<tasks_stddev_samp_fields>;
  sum?: Maybe<tasks_sum_fields>;
  var_pop?: Maybe<tasks_var_pop_fields>;
  var_samp?: Maybe<tasks_var_samp_fields>;
  variance?: Maybe<tasks_variance_fields>;
}

/**
 * aggregate avg on columns
 */
export interface tasks_avg_fields {
  __typename: 'tasks_avg_fields' | undefined;
  id?: Maybe<ScalarsEnums['Float']>;
  list_id?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate max on columns
 */
export interface tasks_max_fields {
  __typename: 'tasks_max_fields' | undefined;
  id?: Maybe<ScalarsEnums['Int']>;
  list_id?: Maybe<ScalarsEnums['Int']>;
  name?: Maybe<ScalarsEnums['String']>;
}

/**
 * aggregate min on columns
 */
export interface tasks_min_fields {
  __typename: 'tasks_min_fields' | undefined;
  id?: Maybe<ScalarsEnums['Int']>;
  list_id?: Maybe<ScalarsEnums['Int']>;
  name?: Maybe<ScalarsEnums['String']>;
}

/**
 * response of any mutation on the table "tasks"
 */
export interface tasks_mutation_response {
  __typename: 'tasks_mutation_response' | undefined;
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums['Int'];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<tasks>;
}

/**
 * aggregate stddev on columns
 */
export interface tasks_stddev_fields {
  __typename: 'tasks_stddev_fields' | undefined;
  id?: Maybe<ScalarsEnums['Float']>;
  list_id?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate stddev_pop on columns
 */
export interface tasks_stddev_pop_fields {
  __typename: 'tasks_stddev_pop_fields' | undefined;
  id?: Maybe<ScalarsEnums['Float']>;
  list_id?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate stddev_samp on columns
 */
export interface tasks_stddev_samp_fields {
  __typename: 'tasks_stddev_samp_fields' | undefined;
  id?: Maybe<ScalarsEnums['Float']>;
  list_id?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate sum on columns
 */
export interface tasks_sum_fields {
  __typename: 'tasks_sum_fields' | undefined;
  id?: Maybe<ScalarsEnums['Int']>;
  list_id?: Maybe<ScalarsEnums['Int']>;
}

/**
 * aggregate var_pop on columns
 */
export interface tasks_var_pop_fields {
  __typename: 'tasks_var_pop_fields' | undefined;
  id?: Maybe<ScalarsEnums['Float']>;
  list_id?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate var_samp on columns
 */
export interface tasks_var_samp_fields {
  __typename: 'tasks_var_samp_fields' | undefined;
  id?: Maybe<ScalarsEnums['Float']>;
  list_id?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate variance on columns
 */
export interface tasks_variance_fields {
  __typename: 'tasks_variance_fields' | undefined;
  id?: Maybe<ScalarsEnums['Float']>;
  list_id?: Maybe<ScalarsEnums['Float']>;
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  lists: lists;
  lists_aggregate: lists_aggregate;
  lists_aggregate_fields: lists_aggregate_fields;
  lists_avg_fields: lists_avg_fields;
  lists_max_fields: lists_max_fields;
  lists_min_fields: lists_min_fields;
  lists_mutation_response: lists_mutation_response;
  lists_stddev_fields: lists_stddev_fields;
  lists_stddev_pop_fields: lists_stddev_pop_fields;
  lists_stddev_samp_fields: lists_stddev_samp_fields;
  lists_sum_fields: lists_sum_fields;
  lists_var_pop_fields: lists_var_pop_fields;
  lists_var_samp_fields: lists_var_samp_fields;
  lists_variance_fields: lists_variance_fields;
  tasks: tasks;
  tasks_aggregate: tasks_aggregate;
  tasks_aggregate_fields: tasks_aggregate_fields;
  tasks_avg_fields: tasks_avg_fields;
  tasks_max_fields: tasks_max_fields;
  tasks_min_fields: tasks_min_fields;
  tasks_mutation_response: tasks_mutation_response;
  tasks_stddev_fields: tasks_stddev_fields;
  tasks_stddev_pop_fields: tasks_stddev_pop_fields;
  tasks_stddev_samp_fields: tasks_stddev_samp_fields;
  tasks_sum_fields: tasks_sum_fields;
  tasks_var_pop_fields: tasks_var_pop_fields;
  tasks_var_samp_fields: tasks_var_samp_fields;
  tasks_variance_fields: tasks_variance_fields;
}
export type SchemaObjectTypesNames =
  | 'Query'
  | 'Mutation'
  | 'Subscription'
  | 'lists'
  | 'lists_aggregate'
  | 'lists_aggregate_fields'
  | 'lists_avg_fields'
  | 'lists_max_fields'
  | 'lists_min_fields'
  | 'lists_mutation_response'
  | 'lists_stddev_fields'
  | 'lists_stddev_pop_fields'
  | 'lists_stddev_samp_fields'
  | 'lists_sum_fields'
  | 'lists_var_pop_fields'
  | 'lists_var_samp_fields'
  | 'lists_variance_fields'
  | 'tasks'
  | 'tasks_aggregate'
  | 'tasks_aggregate_fields'
  | 'tasks_avg_fields'
  | 'tasks_max_fields'
  | 'tasks_min_fields'
  | 'tasks_mutation_response'
  | 'tasks_stddev_fields'
  | 'tasks_stddev_pop_fields'
  | 'tasks_stddev_samp_fields'
  | 'tasks_sum_fields'
  | 'tasks_var_pop_fields'
  | 'tasks_var_samp_fields'
  | 'tasks_variance_fields';

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  lists_constraint: lists_constraint | undefined;
  lists_select_column: lists_select_column | undefined;
  lists_update_column: lists_update_column | undefined;
  order_by: order_by | undefined;
  tasks_constraint: tasks_constraint | undefined;
  tasks_select_column: tasks_select_column | undefined;
  tasks_update_column: tasks_update_column | undefined;
}
