import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';

export class CreateExpenseItemDto {
  @IsOptional()
  @IsUUID()
  categoryId?: string;

  @IsString()
  @MaxLength(255)
  name: string;

  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsNumber()
  @IsPositive()
  unitPrice: number;
}

export class CreateExpenseDto {
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateExpenseItemDto)
  items: CreateExpenseItemDto[];

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsUUID()
  branchId?: string;
}
