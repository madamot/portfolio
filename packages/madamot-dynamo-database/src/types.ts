export type RowType = { [k: string]: string | number | boolean | Date | null | { sha1: string } }

export type WhereInputRow<TRow extends RowType> =
  | TRow[keyof TRow]
  | undefined
  | null
  | { contains?: string | undefined }
  | { sha1?: string | undefined }
  | { startsWith?: string | undefined }
  | { endsWith?: string | undefined }
  | { not?: string | undefined | null }
  | { in?: string[] | number[] | undefined }
  | { notIn?: string[] | number[] | undefined }
  | { '='?: number | Date | undefined }
  | { '!='?: number | Date | undefined }
  | { '<>'?: number | Date | undefined }
  | { '<='?: number | Date | undefined }
  | { '>='?: number | Date | undefined }
  | { '>'?: number | Date | undefined }
  | { '<'?: number | Date | undefined }

export type WhereInput<TRow extends RowType> = {
  [Key in keyof TRow]?: WhereInputRow<TRow>
} & { OR?: WhereInput<TRow> | WhereInput<TRow>[] } & { AND?: WhereInput<TRow> | WhereInput<TRow>[] }

export interface FindManyProps<RowObj extends RowType> {
  key
  where?: WhereInput<RowObj>
}
