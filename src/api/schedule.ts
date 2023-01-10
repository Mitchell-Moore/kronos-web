import axios from 'axios';
import { base_url } from '../utils/constants';
import { User, getAuthHeader } from './user';

export interface Schedule {
  id: number;
  startDateTime: Date;
  endDateTime: Date;
  isRecurring: boolean;
  originalTimezone: string;
  userId: number;
  user: User;
  dayOfWeek: string;
}

export const getUserSchedules = async (userId: number) => {
  const header = getAuthHeader();
  return new Promise(function (resolve, reject) {
    axios
      .get(base_url + `api/schedules/${userId}`, {
        withCredentials: true,
        headers: { authorization: header },
      })
      .then((response) => {
        if (response.data.data) {
          response.data.data.forEach((schedule: Schedule) => {
            schedule.startDateTime = new Date(schedule.startDateTime);
            schedule.endDateTime = new Date(schedule.endDateTime);
          });
        }
        console.log(response);
        resolve(response);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
