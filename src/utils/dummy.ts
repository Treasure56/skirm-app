import { User, Withdrawal } from "@/skirm-app-shared";
import { Matches, SkirmProps } from "@/types";

 export const usersTableDummys:User[]=[
  {
    _id: "1",
    userName: "Lucinda Ferguson",
    phone: "1234567890",
    email: "j9hCt@example.com",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    firstName: "Lucinda",
    lastName: "Ferguson",
    createdAt: "2022-01-01T00:00:00.000Z",
    isVerified: true
  },
  {
    _id: "1",
    userName: "Lucinda Ferguson",
    phone: "1234567890",
    email: "j9hCt@example.com",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    firstName: "Lucinda",
    lastName: "Ferguson",
    createdAt: "2022-01-01T00:00:00.000Z",
    isVerified: true
  },
  {
    _id: "1",
    userName: "Lucinda Ferguson",
    phone: "1234567890",
    email: "j9hCt@example.com",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    firstName: "Lucinda",
    lastName: "Ferguson",
    createdAt: "2022-01-01T00:00:00.000Z",
    isVerified: true
  }
]


export const skirmTableDummys:SkirmProps[] =[
  {
    _id: "1",
    owner: "Lucinda Ferguson",
    guest: "Lucinda Mayer",
    notion: "Skirm",
    stake: 100,
    match: "Match 1",
    winner: "Lucinda Mayer",
    createdAt: new Date(),
    completedAt: new Date(),
  }
]

export const matchDummys:Matches[] =[
  {
    _id: "1",
    homeTeam: "Lucinda Ferguson",
    awayTeam: "Lucinda Mayer",
    league: "Premier League",
    startDateTime: "2022-01-01T00:00:00.000Z",
  }
]


export const withdrawalDummys:Withdrawal[] =[
  {
    _id: "1",
    createdAt: "2022-01-01T00:00:00.000Z",
    user: "Lucinda Ferguson",
    bankName: "Bank Name",
    bankAccountNumber: "1234567890",
    bankAccountName: "Lucinda Ferguson",
    isApproved: "Pending",
  }
]
