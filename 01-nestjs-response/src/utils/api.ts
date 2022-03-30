import { API_CODES, API_MSGS } from 'src/const/api.const';
import { ApiOkRes, ApiPagerOkRes, ApiErrRes } from 'src/dto/api.dto';

export interface IPagerOkOpts {
  list: any[];
  page: number;
  limit: number;
  total: number;
}
export type IErrArgs = [number, string?, Error?];

/**
 * 成功
 */
export class ApiOk implements ApiOkRes {
  code: number = API_CODES.OK;
  msg: string = API_MSGS[API_CODES.OK];
  data: any;
  constructor(data: any = null) {
    this.data = data;
  }
}

/**
 * 分页成功
 */
export class ApiPagerOk implements ApiPagerOkRes {
  code: number = API_CODES.OK;
  msg: string = API_MSGS[API_CODES.OK];
  list: any;
  page: number;
  limit: number;
  total: number;
  constructor({ list = [], page, limit, total }: IPagerOkOpts) {
    this.list = list;
    this.page = page;
    this.limit = limit;
    this.total = total;
  }
}

/**
 * 错误
 */
export class ApiErr implements ApiErrRes {
  code: number = API_CODES.UNKNOWN;
  msg: string = API_MSGS[API_CODES.UNKNOWN];
  err?: string;

  constructor(...args: IErrArgs) {
    const [code, msg, err] = args;
    this.code = code;
    this.msg = msg ?? API_MSGS[code];
    this.err = err ? err.toString() : null;
  }
}

/**
 * Api响应类
 */
export class Api {
  /**
   * 成功
   */
  static ok = (data?) => new ApiOk(data);

  /**
   * 分页成功
   */
  static pagerOk = (opts: IPagerOkOpts) => new ApiPagerOk(opts);

  /**
   * 错误
   */
  static err = (...args: IErrArgs) => new ApiErr(...args);
}
