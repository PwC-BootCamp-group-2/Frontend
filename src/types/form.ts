export interface LoginType {
  email: string;
  password: string;
}

export interface UserRegisterType {
  email: string;
  phoneNumber: string;
  password: string;
  companyName: string;
  role: string;
  address: string;
  fullName: string;
}

export interface MakeBookingType {
  spaceId: number;
  userId: number;
  merchantId: number;
  resourceId: number;
  noR: number;
  bookedDates: any[];
  amount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  Used: boolean;
  spaceName: string;
}

export interface CreateSpaceType {
  name: string;
  merchantId: number;
  type: string;
  capacity: number;
  assets: any;
  imgs: any;
  location: string;
  price: string;
  description: string;
}
