import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [events, setEvents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Função para formatar datas
  const formatDate = (daysToAdd = 0) => {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);
    return date.toISOString().split('T')[0];
  };

  // Função para formatar data legível
  const formatDisplayDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  // Função para formatar data completa
  const formatFullDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  // Verificar se há usuário salvo no localStorage ao inicializar
  useEffect(() => {
    const checkAuthStatus = () => {
      const savedUser = localStorage.getItem('unimar_user');
      const savedAuth = localStorage.getItem('unimar_authenticated');
      
      if (savedUser && savedAuth === 'true') {
        try {
          setUser(JSON.parse(savedUser));
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Erro ao recuperar dados do usuário:', error);
          localStorage.removeItem('unimar_user');
          localStorage.removeItem('unimar_authenticated');
        }
      }
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  // Carregar dados iniciais
  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);
      
      // Simular carregamento de dados
      setTimeout(() => {
        // Eventos com datas baseadas na data atual
        setEvents([
          { 
            id: 1, 
            title: 'Palestra: Inovação Tecnológica', 
            date: formatDate(2), 
            time: '14h00', 
            location: 'Auditório Central' 
          },
          { 
            id: 2, 
            title: 'Workshop: Carreiras em TI', 
            date: formatDate(5), 
            time: '09h00', 
            location: 'Laboratório de Informática' 
          },
          { 
            id: 3, 
            title: 'Reunião: Centro Acadêmico', 
            date: formatDate(7), 
            time: '19h00', 
            location: 'Sala 102' 
          }
        ]);
        
        // Cursos (não precisam de datas)
        setCourses([
          { id: 1, title: 'Engenharia de Software', duration: '5 anos', period: 'Matutino', vacancies: 40 },
          { id: 2, title: 'Administração', duration: '4 anos', period: 'Noturno', vacancies: 50 },
          { id: 3, title: 'Direito', duration: '5 anos', period: 'Integral', vacancies: 60 },
          { id: 4, title: 'Medicina', duration: '6 anos', period: 'Integral', vacancies: 30 },
          { id: 5, title: 'Psicologia', duration: '5 anos', period: 'Vespertino', vacancies: 45 },
          { id: 6, title: 'Enfermagem', duration: '4 anos', period: 'Matutino', vacancies: 35 }
        ]);
        
        // Notícias com datas baseadas na data atual
        setNews([
          { 
            id: 1, 
            title: 'Inscrições abertas para projetos de pesquisa', 
            content: 'Prazo final: ' + formatDisplayDate(formatDate(15)), 
            date: formatDate(-2) 
          },
          { 
            id: 2, 
            title: 'Novo horário de atendimento da biblioteca', 
            content: 'Segunda a sexta, das 8h às 22h', 
            date: formatDate(-5) 
          },
          { 
            id: 3, 
            title: 'Processo seletivo para bolsas de estudo', 
            content: 'Inscrições até ' + formatDisplayDate(formatDate(10)), 
            date: formatDate(-1) 
          }
        ]);
        
        // Notificações com datas recentes
        setNotifications([
          { 
            id: 1, 
            type: 'warning', 
            message: 'Documentos pendentes de entrega', 
            date: formatDate(-1) 
          },
          { 
            id: 2, 
            type: 'info', 
            message: 'Novo horário de biblioteca disponível', 
            date: formatDate(0) 
          }
        ]);
        
        setIsLoading(false);
      }, 1000);
    };

    loadInitialData();
  }, []);

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setIsLoading(true);
      
      // Simular autenticação
      setTimeout(() => {
        if (email && password) {
          const userData = {
            id: 1,
            name: 'Aluno UNIMAR',
            email: email,
            role: 'student',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
            progress: {
              semester: '2023/2',
              enrolledCourses: 6,
              completedHours: 42,
              totalHours: 60,
              financialStatus: 'Regular',
              pendingDocuments: 2
            }
          };
          
          setUser(userData);
          setIsAuthenticated(true);
          
          // Salvar no localStorage
          localStorage.setItem('unimar_user', JSON.stringify(userData));
          localStorage.setItem('unimar_authenticated', 'true');
          
          setIsLoading(false);
          resolve({ success: true });
        } else {
          setIsLoading(false);
          reject({ success: false, message: 'Email e senha são obrigatórios' });
        }
      }, 1500);
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setCurrentPage('home');
    
    // Remover do localStorage
    localStorage.removeItem('unimar_user');
    localStorage.removeItem('unimar_authenticated');
  };

  const register = (userData) => {
    return new Promise((resolve) => {
      setIsLoading(true);
      
      // Simular registro
      setTimeout(() => {
        setIsLoading(false);
        resolve({ success: true, message: 'Conta criada com sucesso!' });
      }, 1500);
    });
  };

  const addNotification = (notification) => {
    setNotifications(prev => [notification, ...prev]);
  };

  const markNotificationAsRead = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    register,
    currentPage,
    setCurrentPage,
    events,
    setEvents,
    courses,
    setCourses,
    news,
    setNews,
    isLoading,
    setIsLoading,
    notifications,
    addNotification,
    markNotificationAsRead,
    formatDisplayDate,
    formatFullDate
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;