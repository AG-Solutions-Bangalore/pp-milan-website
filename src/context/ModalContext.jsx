import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  HelpCircle, 
  Smartphone, 
  Sparkles, 
  HeartHandshake, 
  Info,
  CheckCircle2
} from 'lucide-react';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    tag: '',
    content: '',
    iconType: 'info',
    buttonText: 'Got it',
    actionPath: null,
    onAction: null
  });

  const openModal = ({ 
    title, 
    tag, 
    content, 
    iconType = 'info', 
    buttonText = 'Got it',
    actionPath = null,
    onAction = null
  }) => {
    setModalState({
      isOpen: true,
      title,
      tag,
      content,
      iconType,
      buttonText,
      actionPath,
      onAction
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleActionClick = () => {
    const { actionPath, onAction } = modalState;
    closeModal();
    if (typeof onAction === 'function') {
      onAction();
    }
    if (actionPath) {
      navigate(actionPath);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && modalState.isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalState.isOpen]);

  const renderIcon = () => {
    const props = { className: "w-6 h-6 stroke-[2]" };
    switch (modalState.iconType) {
      case 'shield':
        return <ShieldCheck {...props} />;
      case 'terms':
        return <FileText {...props} />;
      case 'help':
        return <HelpCircle {...props} />;
      case 'app':
        return <Smartphone {...props} />;
      case 'sparkles':
        return <Sparkles {...props} />;
      case 'community':
        return <HeartHandshake {...props} />;
      case 'success':
        return <CheckCircle2 {...props} />;
      default:
        return <Info {...props} />;
    }
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <AnimatePresence>
        {modalState.isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/55 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
              className="relative w-full max-w-md bg-white rounded-3xl border-2 border-[#D4AF37]/50 shadow-[0_25px_60px_rgba(159,18,57,0.2)] p-6 sm:p-8 text-center overflow-hidden z-10 my-8"
            >
              {/* Background Subtle Mandala Watermark */}
              <div className="absolute -top-12 -right-12 w-48 h-48 pointer-events-none opacity-15 select-none text-[#D4AF37]">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="35" />
                  <circle cx="50" cy="50" r="22" strokeDasharray="2 2" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                    <path key={deg} d="M50 15 C45 30 45 40 50 50 C55 40 55 30 50 15 Z" transform={`rotate(${deg} 50 50)`} />
                  ))}
                </svg>
              </div>

              {/* Close 'X' Button at top-right */}
              <button
                onClick={closeModal}
                aria-label="Close dialog"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAF5F6] hover:bg-[#FCE7EB] text-[#7A6B6B] hover:text-[#9F1239] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Tag Pill if provided */}
              {modalState.tag && (
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFF0F3] border border-[#FBCFE8] text-[10.5px] font-bold tracking-wider uppercase text-[#9F1239] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9F1239]" />
                  <span>{modalState.tag}</span>
                </div>
              )}

              {/* Central Ornate Icon Medallion */}
              <div className="relative mx-auto mb-4 w-14 h-14 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FFE4E8] via-[#FFF1F4] to-white border border-[#FDA4AF] shadow-md shadow-[#9F1239]/10" />
                <div className="relative text-[#9F1239]">
                  {renderIcon()}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1E1B18] tracking-tight leading-snug mb-2">
                {modalState.title}
              </h3>

              {/* Delicate Gold Heart Divider */}
              <div className="flex items-center justify-center gap-1.5 text-[#D4AF37] mb-3.5">
                <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
                <span className="text-xs">♡</span>
                <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
              </div>

              {/* Content Body */}
              <div className="text-xs sm:text-[13.5px] text-[#554444] leading-relaxed mb-6 px-1 max-h-60 overflow-y-auto">
                {typeof modalState.content === 'string' ? (
                  <p>{modalState.content}</p>
                ) : (
                  modalState.content
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={handleActionClick}
                className="w-full sm:w-auto px-8 py-2.5 rounded-full bg-gradient-to-r from-[#9F1239] via-[#BE123C] to-[#9F1239] hover:from-[#881337] hover:to-[#BE123C] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#9F1239]/25 hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                {modalState.buttonText}
              </button>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
