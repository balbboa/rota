import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import Calendar from '../../public/calendar.png';
import Meal from '../../public/meal.png';
import Search from '../../public/search.png';
import Credit from '../../public/credit-card.png';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import { Container, CustomCard, TextCard } from './Card.styles';


export default function DashboardCards() {
  return (
    <Container>
    <Link href="/escalas" passHref >
        <CustomCard>
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
        <Image
            src={Calendar}
            alt="calendar"
            width={80}
            height={80}/>
            <TextCard>
                Minhas Escalas
            </TextCard>
        </CardContent>
        </Card>
        </CustomCard>
    </Link>

    <Link href="/vales" passHref >
        <CustomCard>
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
        <Image
            src={Meal}
            alt="meal"
            width={80}
            height={80}/>
            <TextCard>
                Meus Vales
            </TextCard>
        </CardContent>
        </Card>
        </CustomCard>
    </Link>

    <Link href="/diarias" passHref >
        <CustomCard>
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
        <Image
            src={Credit}
            alt="credit"
            width={80}
            height={80}/>
            <TextCard>
                Minhas Diárias
            </TextCard>
        </CardContent>
        </Card>
        </CustomCard>
    </Link>

    <Link href="/marcacao" passHref >
        <CustomCard>
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
        <Image
            src={Search}
            alt="search"
            width={80}
            height={80}/>
            <TextCard>
                Marcação de DO
            </TextCard>
        </CardContent>
        </Card>
        </CustomCard>
    </Link>
    </Container>
  );
}
