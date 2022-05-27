/* eslint-disable @next/next/link-passhref */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import Link from "next/link";
import * as React from 'react';
import Calendar from '../../public/calendar.png';
import Credit from '../../public/credit-card.png';
import Meal from '../../public/meal.png';
import { Container, CustomCard, TextCard } from './Card.styles';


export default function DashboardCards() {
  return (
    <Container>
    <Link href="/escalas">
        <CustomCard>
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
        <Image
            src={Calendar}
            alt="calendar"
            width={80}
            height={80}/>
            <TextCard>
                Escalas
            </TextCard>
        </CardContent>
        </Card>
        </CustomCard>
    </Link>

    <Link href="/vales">
        <CustomCard>
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
        <Image
            src={Meal}
            alt="meal"
            width={80}
            height={80}/>
            <TextCard>
                Vales
            </TextCard>
        </CardContent>
        </Card>
        </CustomCard>
    </Link>

    <Link href="/diarias">
        <CustomCard>
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
        <Image
            src={Credit}
            alt="credit"
            width={80}
            height={80}/>
            <TextCard>
                Diárias
            </TextCard>
        </CardContent>
        </Card>
        </CustomCard>
    </Link>

    {/* <Link href="/marcacao">
        <CustomCard>
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
        <Image
            src={Search}
            alt="search"
            width={80}
            height={80}/>
            <TextCard>
                Marcar
            </TextCard>
        </CardContent>
        </Card>
        </CustomCard>
    </Link> */}
    </Container>
  );
}
