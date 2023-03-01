import { UUIDDto } from "types/uuid-dto.type";

import { UserStatuses } from "app/users/enums/user-statuses.enum";

export interface UserDto extends UUIDDto {
  phone: string;
  email: string;
  status: UserStatuses;
}