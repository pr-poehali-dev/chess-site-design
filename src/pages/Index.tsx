import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ChessBoard from '@/components/ChessBoard';
import GameAnalysis from '@/components/GameAnalysis';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'play' | 'analysis'>('play');

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Crown" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold">ChessMaster</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#tournaments" className="hover:text-primary transition-colors">Турниры</a>
              <a href="#learn" className="hover:text-primary transition-colors">Обучение</a>
              <a href="#ratings" className="hover:text-primary transition-colors">Рейтинги</a>
              <a href="#news" className="hover:text-primary transition-colors">Новости</a>
              <a href="#history" className="hover:text-primary transition-colors">История</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Играй.<br />
                Учись.<br />
                <span className="text-primary">Побеждай.</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональная платформа для шахматистов с анализом партий от движка и разбором ошибок
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать игру
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="GraduationCap" size={20} className="mr-2" />
                  Обучение
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/a36bf255-7a0b-4e20-8e3f-c67d8e5006eb/files/f5b318a1-be7f-4b93-b201-b182cd73fe47.jpg"
                alt="Chess Board"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="play" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Онлайн-игра и Анализ</h2>
            <p className="text-muted-foreground text-lg">
              Играйте и анализируйте партии с помощью шахматного движка
            </p>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              onClick={() => setActiveSection('play')}
              variant={activeSection === 'play' ? 'default' : 'outline'}
              className={activeSection === 'play' ? 'bg-primary text-primary-foreground' : ''}
            >
              <Icon name="Gamepad2" size={20} className="mr-2" />
              Играть
            </Button>
            <Button 
              onClick={() => setActiveSection('analysis')}
              variant={activeSection === 'analysis' ? 'default' : 'outline'}
              className={activeSection === 'analysis' ? 'bg-primary text-primary-foreground' : ''}
            >
              <Icon name="LineChart" size={20} className="mr-2" />
              Анализ партий
            </Button>
          </div>

          {activeSection === 'play' ? <ChessBoard /> : <GameAnalysis />}
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Возможности платформы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Trophy', title: 'Турниры', desc: 'Участвуйте в онлайн-турнирах и соревнованиях' },
              { icon: 'BookOpen', title: 'Обучение', desc: 'Уроки от гроссмейстеров и интерактивные задачи' },
              { icon: 'TrendingUp', title: 'Рейтинги', desc: 'Следите за своим прогрессом и мировыми рейтингами' },
              { icon: 'Newspaper', title: 'Новости', desc: 'Актуальные новости из мира шахмат' },
              { icon: 'Brain', title: 'Анализ с ИИ', desc: 'Глубокий анализ партий с разбором ошибок' },
              { icon: 'History', title: 'История', desc: 'Изучайте легендарные партии и игроков' }
            ].map((feature, i) => (
              <Card key={i} className="p-6 hover:border-primary transition-all duration-300 hover:scale-105">
                <Icon name={feature.icon as any} className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="learn" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/a36bf255-7a0b-4e20-8e3f-c67d8e5006eb/files/92f2eef9-a958-4c56-a19f-3fe00fa10016.jpg"
                alt="Chess Analysis"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Профессиональное обучение</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Наша платформа предлагает уникальные инструменты для анализа и обучения
              </p>
              <ul className="space-y-4">
                {[
                  'Анализ партий с движком Stockfish',
                  'Визуализация ошибок и упущенных возможностей',
                  'Интерактивные уроки от гроссмейстеров',
                  'База партий чемпионов мира',
                  'Персональные тренировки'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={24} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам шахматистов, которые совершенствуют свою игру каждый день
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Icon name="Rocket" size={20} className="mr-2" />
            Зарегистрироваться бесплатно
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Crown" className="text-primary" size={28} />
                <span className="text-xl font-bold">ChessMaster</span>
              </div>
              <p className="text-muted-foreground">
                Профессиональная платформа для шахматистов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Онлайн-игра</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Турниры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обучение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">История</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Рейтинги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@chessmaster.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ChessMaster. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
