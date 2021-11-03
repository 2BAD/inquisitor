import { AnyRecord, MxRecord, NaptrRecord, SoaRecord, SrvRecord } from 'dns'

export type Result = Promise<string[] | MxRecord[] | NaptrRecord[] | SoaRecord | SrvRecord[] | string[][] | AnyRecord[]>
