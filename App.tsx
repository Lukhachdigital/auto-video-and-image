
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Button from './components/shared/Button';
import ImageGeneratorTab from './components/ImageGeneratorTab';
import WorkflowTab from './components/WorkflowTab';
import SettingsTab from './components/SettingsTab';
import TextToVideoTab from './components/TextToVideoTab';

type Tab = 'image' | 'text-to-video' | 'workflow' | 'profile';

interface LogEntry {
  id: number;
  message: string;
  type: 'info' | 'success' | 'error' | 'warning';
  timestamp: string;
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('image');
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [apiKey, setApiKey] = useState<string>('');

  useEffect(() => {
    // Load API key from local storage on initial render
    const savedApiKey = localStorage.getItem('google-api-key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  const handleApiKeyChange = (newKey: string) => {
    setApiKey(newKey);
    // Save API key to local storage
    localStorage.setItem('google-api-key', newKey);
  };

  const addLog = (message: string, type: 'info' | 'success' | 'error' | 'warning' = 'info') => {
    const newLog: LogEntry = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date().toLocaleTimeString(),
    };
    // Keep logs array from getting too large
    setLogs(prev => [newLog, ...prev.slice(0, 100)]);
  };

  const TabButton: React.FC<{ tabName: Tab; label: string }> = ({ tabName, label }) => (
    <Button
      variant={activeTab === tabName ? 'active' : 'secondary'}
      onClick={() => setActiveTab(tabName)}
      className="flex-1 text-xs sm:text-sm"
    >
      {label}
    </Button>
  );
  
  const getLogColor = (type: LogEntry['type']) => {
    switch (type) {
        case 'success': return 'text-green-400';
        case 'error': return 'text-red-400';
        case 'warning': return 'text-yellow-400';
        default: return 'text-gray-400';
    }
  }

  return (
    <div className="min-h-screen p-2 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto mt-16">
        <Header />
        <main className="bg-[#1e293b] text-gray-300 p-3 sm:p-6 rounded-lg border border-slate-700 shadow-2xl space-y-6">
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 border-b border-slate-700 pb-4">
            <TabButton tabName="image" label="Text to Image" />
            <TabButton tabName="text-to-video" label="Text to Video" />
            <TabButton tabName="workflow" label="Image to Video" />
            <TabButton tabName="profile" label="Profile" />
          </div>

          <div>
            {activeTab === 'image' && <ImageGeneratorTab apiKey={apiKey} />}
            {activeTab === 'text-to-video' && <TextToVideoTab addLog={addLog} apiKey={apiKey} />}
            {activeTab === 'workflow' && <WorkflowTab addLog={addLog} apiKey={apiKey} />}
            {activeTab === 'profile' && <SettingsTab apiKey={apiKey} onApiKeyChange={handleApiKeyChange} />}
          </div>

          { (activeTab === 'workflow' || activeTab === 'text-to-video') && logs.length > 0 && (
             <div>
                <h3 className="text-lg font-bold text-white mb-2">Logs</h3>
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 max-h-60 overflow-y-auto font-mono text-xs">
                    {logs.map(log => (
                        <p key={log.id} className="flex">
                            <span className="text-gray-500 mr-2 flex-shrink-0">{log.timestamp}</span>
                            <span className={`${getLogColor(log.type)} break-all`}>{log.message}</span>
                        </p>
                    ))}
                </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default App;
