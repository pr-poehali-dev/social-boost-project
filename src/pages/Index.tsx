import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeService, setActiveService] = useState("instagram");
  const [showDashboard, setShowDashboard] = useState(false);

  const services = [
    {
      id: "instagram",
      name: "Instagram",
      icon: "Instagram",
      color: "from-pink-500 to-purple-500",
      packages: [
        { name: "Лайки", price: "50₽", amount: "100", popular: false },
        { name: "Подписчики", price: "200₽", amount: "50", popular: true },
        { name: "Просмотры", price: "100₽", amount: "1000", popular: false },
      ],
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: "Youtube",
      color: "from-red-500 to-red-600",
      packages: [
        { name: "Лайки", price: "80₽", amount: "100", popular: false },
        { name: "Подписчики", price: "300₽", amount: "50", popular: true },
        { name: "Просмотры", price: "150₽", amount: "1000", popular: false },
      ],
    },
    {
      id: "tiktok",
      name: "TikTok",
      icon: "Music",
      color: "from-black to-gray-800",
      packages: [
        { name: "Лайки", price: "60₽", amount: "100", popular: false },
        { name: "Подписчики", price: "250₽", amount: "50", popular: true },
        { name: "Просмотры", price: "120₽", amount: "1000", popular: false },
      ],
    },
  ];

  const orderHistory = [
    {
      id: 1,
      service: "Instagram",
      type: "Подписчики",
      amount: 50,
      status: "Выполнен",
      progress: 100,
      date: "2024-01-15",
    },
    {
      id: 2,
      service: "YouTube",
      type: "Просмотры",
      amount: 1000,
      status: "В процессе",
      progress: 75,
      date: "2024-01-14",
    },
    {
      id: 3,
      service: "TikTok",
      type: "Лайки",
      amount: 100,
      status: "Выполнен",
      progress: 100,
      date: "2024-01-13",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Выполнен":
        return "bg-green-500";
      case "В процессе":
        return "bg-yellow-500";
      case "Ожидает":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  if (showDashboard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Личный кабинет</h1>
            <Button
              variant="outline"
              onClick={() => setShowDashboard(false)}
              className="hover:bg-primary/10"
            >
              <Icon name="ArrowLeft" className="mr-2" size={16} />
              Назад
            </Button>
          </div>

          <div className="grid gap-6">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="History" size={20} />
                  История заказов
                </CardTitle>
                <CardDescription>
                  Отслеживайте статус ваших заказов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderHistory.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center">
                          <Icon
                            name="Package"
                            size={16}
                            className="text-white"
                          />
                        </div>
                        <div>
                          <p className="font-medium">
                            {order.service} - {order.type}
                          </p>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">{order.amount}</p>
                          <Badge
                            className={`${getStatusColor(order.status)} text-white`}
                          >
                            {order.status}
                          </Badge>
                        </div>
                        <div className="w-24">
                          <Progress value={order.progress} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">SocialBoost</h1>
            </div>
            <Button
              onClick={() => setShowDashboard(true)}
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-700 hover:to-purple-800 text-white"
            >
              <Icon name="User" className="mr-2" size={16} />
              Личный кабинет
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Профессиональная накрутка
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                для социальных сетей
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Увеличьте популярность вашего контента с помощью качественных
              лайков, подписчиков и просмотров от реальных пользователей
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-700 hover:to-purple-800 text-white px-8"
              >
                Начать сейчас
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Выберите платформу и тип услуги для продвижения вашего контента
            </p>
          </div>

          <Tabs
            value={activeService}
            onValueChange={setActiveService}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex items-center gap-2"
                >
                  <Icon name={service.icon} size={16} />
                  {service.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="grid md:grid-cols-3 gap-6">
                  {service.packages.map((pkg, index) => (
                    <Card
                      key={index}
                      className={`relative hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                        pkg.popular ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      {pkg.popular && (
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-purple-600 text-white">
                          Популярное
                        </Badge>
                      )}
                      <CardHeader className="text-center">
                        <div
                          className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}
                        >
                          <Icon
                            name={service.icon}
                            size={24}
                            className="text-white"
                          />
                        </div>
                        <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                        <CardDescription>Для {service.name}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="mb-4">
                          <span className="text-3xl font-bold text-gray-900">
                            {pkg.price}
                          </span>
                          <span className="text-gray-600 ml-2">
                            за {pkg.amount}
                          </span>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-purple-700 hover:to-purple-800 text-white">
                          Заказать
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Безопасность</h4>
              <p className="text-gray-600">
                Все услуги выполняются безопасными методами без риска для вашего
                аккаунта
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Быстрое выполнение</h4>
              <p className="text-gray-600">
                Заказы начинают выполняться в течение 5-10 минут после оплаты
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Icon name="HeadphonesIcon" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Поддержка 24/7</h4>
              <p className="text-gray-600">
                Наша команда готова помочь вам в любое время
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={16} className="text-white" />
                </div>
                <h4 className="text-xl font-bold">SocialBoost</h4>
              </div>
              <p className="text-gray-400">
                Профессиональные услуги продвижения в социальных сетях
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Instagram</li>
                <li>YouTube</li>
                <li>TikTok</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li>FAQ</li>
                <li>Контакты</li>
                <li>Условия использования</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <ul className="space-y-2 text-gray-400">
                <li>support@socialboost.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SocialBoost. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
