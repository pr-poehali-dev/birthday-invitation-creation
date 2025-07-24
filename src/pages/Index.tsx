import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [guests, setGuests] = useState('');
  const [name, setName] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const galleryImages = [
    '/img/d409f621-405d-45e4-a6f6-b5235fb6da34.jpg',
    '/img/4c774bfa-8986-408a-84d2-b037906a3c20.jpg',
    '/img/6f86be48-80b4-45b9-8cab-70ef7de53f00.jpg'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <Icon name="PartyPopper" size={64} className="mx-auto mb-6 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            День Рождения Анны
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Приглашаем вас разделить радость этого особенного дня
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <Icon name="Calendar" size={32} className="mb-2 text-primary" />
              <p className="font-semibold">15 августа 2024</p>
              <p className="text-sm text-muted-foreground">Суббота</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Clock" size={32} className="mb-2 text-primary" />
              <p className="font-semibold">18:00</p>
              <p className="text-sm text-muted-foreground">Начало празднования</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="MapPin" size={32} className="mb-2 text-primary" />
              <p className="font-semibold">Ресторан "Сад"</p>
              <p className="text-sm text-muted-foreground">ул. Садовая, 25</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Воспоминания</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover-scale group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Фото ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {galleryImages.map((image, index) => (
              <Card key={index + 3} className="overflow-hidden hover-scale group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Фото ${index + 4}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Icon name="Heart" size={48} className="mx-auto mb-4 text-primary" />
                <h2 className="text-3xl font-bold mb-4">Подтвердите участие</h2>
                <p className="text-muted-foreground">
                  Пожалуйста, сообщите нам о своём участии до 10 августа
                </p>
              </div>

              {!confirmed ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Введите ваше имя"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="guests">Количество гостей</Label>
                    <Select value={guests} onValueChange={setGuests} required>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите количество" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 человек</SelectItem>
                        <SelectItem value="2">2 человека</SelectItem>
                        <SelectItem value="3">3 человека</SelectItem>
                        <SelectItem value="4">4 человека</SelectItem>
                        <SelectItem value="5+">5+ человек</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full text-lg py-6">
                    <Icon name="Check" size={20} className="mr-2" />
                    Подтвердить участие
                  </Button>
                </form>
              ) : (
                <div className="text-center animate-fade-in">
                  <Icon name="CheckCircle" size={64} className="mx-auto mb-4 text-green-500" />
                  <h3 className="text-2xl font-bold mb-2 text-green-600">
                    Спасибо, {name}!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Ваше участие подтверждено для {guests} {guests === '1' ? 'человека' : 'человек'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ждём вас 15 августа в 18:00! 🎉
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-8 mb-6">
            <Icon name="Phone" size={20} className="text-primary" />
            <span className="text-muted-foreground">+7 (999) 123-45-67</span>
          </div>
          <p className="text-sm text-muted-foreground">
            С любовью и нетерпением ждём встречи с вами! ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;