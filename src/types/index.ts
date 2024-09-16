
export type UsersTableProps = {
  _id: string;
  name: string;
  phone: number;
  email: string;
  image: string;

};
export type SkirmProps = {
  _id: string;
  owner: string;
  guest: string;
  stake: number;
  notion: string;
  match: string;
  createdAt: Date;
  completedAt: Date;
  winner: string;
}
export type Matches = {
  _id: string;
  homeTeam: string;
  awayTeam: string;
  startDateTime: string;
  league: string; 
}