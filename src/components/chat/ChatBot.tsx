import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowLeft, Briefcase, Rocket, DollarSign, BookOpen, ChevronRight, HeartHandshake, Send } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import './ChatBot.css';

interface Message {
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const menuOptions = [
  {
    icon: Rocket,
    title: 'Getting Started',
    description: 'Learn how to start your fundraising journey',
    action: 'start'
  },
  {
    icon: DollarSign,
    title: 'Pricing & Costs',
    description: 'Understand our zero-cost model',
    action: 'pricing'
  },
  {
    icon: BookOpen,
    title: 'Success Stories',
    description: 'See how other schools succeeded',
    action: 'success'
  },
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    description: 'Join our growing team',
    action: 'careers'
  },
  {
    icon: HeartHandshake,
    title: 'Support',
    description: 'Get help with your campaign',
    action: 'support'
  }
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showMenu, setShowMenu] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleOptionClick = (option: typeof menuOptions[0]) => {
    setMessages(prev => [...prev, {
      content: `I'd like to know more about ${option.title}`,
      isBot: false,
      timestamp: new Date()
    }]);

    setTimeout(() => {
      switch (option.action) {
        case 'start':
          setMessages(prev => [...prev, {
            content: "Great choice! Starting a fundraising campaign is easy. Would you like to schedule a quick consultation call?",
            isBot: true,
            timestamp: new Date()
          }]);
          break;
        case 'pricing':
          setMessages(prev => [...prev, {
            content: "Our platform is completely free to use! There are no upfront costs or hidden fees. You only earn money - you never spend it.",
            isBot: true,
            timestamp: new Date()
          }]);
          break;
        case 'success':
          setMessages(prev => [...prev, {
            content: "I'll take you to our success stories page where you can see how other schools have transformed their fundraising.",
            isBot: true,
            timestamp: new Date()
          }]);
          setTimeout(() => {
            navigate('/success');
            setIsOpen(false);
          }, 2000);
          break;
        case 'careers':
          setMessages(prev => [...prev, {
            content: "I'll take you to our careers section where you can learn more about joining our team.",
            isBot: true,
            timestamp: new Date()
          }]);
          setTimeout(() => {
            navigate('/about');
            setTimeout(() => {
              const careersSection = document.getElementById('careers-section');
              if (careersSection) {
                careersSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
            setIsOpen(false);
          }, 2000);
          break;
        case 'support':
          setMessages(prev => [...prev, {
            content: "I'll connect you with our support team right away.",
            isBot: true,
            timestamp: new Date()
          }]);
          setTimeout(() => {
            navigate('/support');
            setIsOpen(false);
          }, 2000);
          break;
      }
    }, 500);
  };

  const handleSendMessage = (message: string) => {
    setMessages(prev => [...prev, {
      content: message,
      isBot: false,
      timestamp: new Date()
    }]);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        content: "I'll help you with that! Feel free to explore our menu options while I connect you with our team.",
        isBot: true,
        timestamp: new Date()
      }]);
      setShowMenu(true);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-0 bg-transparent rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group z-50 shine-effect"
      >
        <img 
          src="https://i.postimg.cc/yxnL5hFF/fundylogo-3.png"
          alt="Fundy AI"
          className="w-14 h-14 group-hover:scale-110 transition-transform"
        />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-2 sm:right-6 w-[90vw] sm:w-96 h-[80vh] sm:h-[600px] bg-gray-50 rounded-2xl shadow-2xl flex flex-col z-50 max-w-[360px] ml-auto mr-2 sm:mr-0">
      <div className="p-2 bg-[#57c3e7] text-white rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-1">
            <img 
              src="htthttps://i.postimg.cc/yxnL5hFF/fundylogo-3.png"
              alt="Fundy AI"
              className="w-10 h-10"
            />
          </div>
          <span className="font-medium">Fundy AI</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} content={message.content} isBot={message.isBot} timestamp={message.timestamp} />
        ))}
        <div ref={messagesEndRef} />

        {showMenu && (
          <div className="space-y-2 mt-4">
            {menuOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className="w-full bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-3 group"
              >
                <div className="p-2 bg-[#57c3e7]/10 rounded-lg group-hover:bg-[#57c3e7]/20">
                  <option.icon className="w-5 h-5 text-[#57c3e7]" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium text-gray-900">{option.title}</div>
                  <div className="text-sm text-gray-500">{option.description}</div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#57c3e7]" />
              </button>
            ))}
          </div>
        )}
      </div>

      <ChatInput onSendMessage={handleSendMessage} disabled={false} />
    </div>
  );
}