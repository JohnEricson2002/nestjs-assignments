import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: string) {
    const num = parseInt(n, 10);
    if (isNaN(num) || num < 1) {
      return { error: 'Please provide a positive integer value for n.' };
    }

    const sequence = this.generateFibonacci(num);
    return { sequence };
  }

  private generateFibonacci(n: number): number[] {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
}
