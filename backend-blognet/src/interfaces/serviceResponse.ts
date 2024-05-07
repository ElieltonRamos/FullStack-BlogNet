import { StatusHTTP } from '../utils/mapStatusHTPP';

type ServiceResponse<type> = {
  status: StatusHTTP,
  data: type | { message: string }
};

export default ServiceResponse;