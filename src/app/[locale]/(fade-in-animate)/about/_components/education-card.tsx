import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardHeader,
} from '@/components/ui/card';

import { Education } from './education';

type Props = Education;

export function EducationCard({
  degree,
  university,
  startDate,
  endDate,
  description,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl font-bold'>{degree}</CardTitle>
        <CardDescription className='text-base text-primary'>
          {university} • {startDate} - {endDate}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground'>{description}</p>
      </CardContent>
    </Card>
  );
}
