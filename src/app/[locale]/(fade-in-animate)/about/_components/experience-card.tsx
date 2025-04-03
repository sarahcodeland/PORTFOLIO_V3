import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Experience } from './experiences';

type Props = Experience;

export function ExperienceCard({
  title,
  companyName,
  startDate,
  endDate,
  responsibilities,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl font-bold'>{title}</CardTitle>
        <CardDescription className='text-base text-primary'>
          {companyName} • {startDate} - {endDate}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className='list-inside list-disc space-y-2 text-muted-foreground'>
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
