import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const analysisData = [
  { move: 1, evaluation: 0.3 },
  { move: 2, evaluation: 0.5 },
  { move: 3, evaluation: 0.4 },
  { move: 4, evaluation: 0.6 },
  { move: 5, evaluation: 0.2 },
  { move: 6, evaluation: -0.5 },
  { move: 7, evaluation: -1.2 },
  { move: 8, evaluation: -0.8 },
  { move: 9, evaluation: 0.1 },
  { move: 10, evaluation: 0.3 },
  { move: 11, evaluation: 1.5 },
  { move: 12, evaluation: 2.1 },
  { move: 13, evaluation: 1.8 },
  { move: 14, evaluation: 3.2 },
  { move: 15, evaluation: 4.5 },
];

const mistakes = [
  { move: 6, type: 'Неточность', evaluation: -0.7, description: '6. Bd3? Лучше было 6. Bc4' },
  { move: 7, type: 'Ошибка', evaluation: -1.2, description: '7. O-O? Пропущен тактический удар' },
  { move: 9, type: 'Неточность', evaluation: -0.2, description: '9. Re1? Слишком пассивно' },
];

const GameAnalysis = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Анализ партии с движком</h3>
            <p className="text-muted-foreground">Глубокий разбор с визуализацией ошибок</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Icon name="Upload" size={20} className="mr-2" />
              Загрузить PGN
            </Button>
            <Button className="bg-primary text-primary-foreground">
              <Icon name="Play" size={20} className="mr-2" />
              Начать анализ
            </Button>
          </div>
        </div>

        <div className="bg-secondary rounded-lg p-6">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <Icon name="TrendingUp" size={20} className="text-primary" />
            График оценки позиции
          </h4>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={analysisData}>
              <defs>
                <linearGradient id="colorEval" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis 
                dataKey="move" 
                stroke="#888" 
                label={{ value: 'Ход', position: 'insideBottom', offset: -5, fill: '#888' }}
              />
              <YAxis 
                stroke="#888"
                label={{ value: 'Оценка', angle: -90, position: 'insideLeft', fill: '#888' }}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1a1f2c', border: '1px solid #333', borderRadius: '8px' }}
                labelStyle={{ color: '#F59E0B' }}
              />
              <Area 
                type="monotone" 
                dataKey="evaluation" 
                stroke="#F59E0B" 
                strokeWidth={3}
                fill="url(#colorEval)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6">
        <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon name="AlertTriangle" size={24} className="text-primary" />
          Найденные ошибки и неточности
        </h4>
        <div className="space-y-4">
          {mistakes.map((mistake, i) => (
            <Card key={i} className="p-4 bg-secondary border-l-4 border-l-primary">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                      Ход {mistake.move}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      mistake.type === 'Ошибка' 
                        ? 'bg-red-500/20 text-red-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {mistake.type}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      Оценка: {mistake.evaluation > 0 ? '+' : ''}{mistake.evaluation}
                    </span>
                  </div>
                  <p className="text-foreground">{mistake.description}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Icon name="Eye" size={20} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle2" size={32} className="text-primary" />
          </div>
          <h4 className="text-3xl font-bold mb-2">85%</h4>
          <p className="text-muted-foreground">Точность игры</p>
        </Card>

        <Card className="p-6 text-center">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="AlertCircle" size={32} className="text-yellow-400" />
          </div>
          <h4 className="text-3xl font-bold mb-2">2</h4>
          <p className="text-muted-foreground">Неточности</p>
        </Card>

        <Card className="p-6 text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="XCircle" size={32} className="text-red-400" />
          </div>
          <h4 className="text-3xl font-bold mb-2">1</h4>
          <p className="text-muted-foreground">Ошибка</p>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="Lightbulb" size={24} className="text-primary" />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Рекомендации по улучшению</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Icon name="ChevronRight" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Уделите больше внимания тактическим возможностям в миттельшпиле</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="ChevronRight" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Работайте над развитием фигур в дебюте - несколько ходов были медленными</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="ChevronRight" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Изучите типичные планы в данном варианте дебюта</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GameAnalysis;
