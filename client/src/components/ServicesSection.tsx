import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The only AI toolbox you'll ever need
          </h2>
          <p className="text-gray-300 mb-8">
            From conversational AI agents to co-pilots, unlock endless possibilities to transform your business
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-[#2A2A2A] px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <span>🚫</span>
              No-Code
            </span>
            <span className="bg-[#2A2A2A] px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <span>💰</span>
              Cost-Effective
            </span>
            <span className="bg-[#2A2A2A] px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <span>📊</span>
              Powerful Analytics
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {/* Accurate Image Classification */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">Accurate Image Classification</h3>
            <p className="text-gray-400 mb-6">
              Enhance support by precisely categorizing images for faster resolutions
            </p>
            
            <div className="flex-grow bg-[#181818] rounded-lg border border-white/5 overflow-hidden">
              {/* Image placeholder */}
              <div className="h-56 bg-[#202020] flex items-center justify-center">
                <span className="text-gray-500">Image Classification Example</span>
              </div>
              
              <div className="p-4">
                <div className="bg-[#392F77] inline-block px-3 py-1 rounded text-xs mb-2">Analysis Result</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-black/30 p-2 rounded">
                    <span>Cup and sealed</span>
                    <span>89%</span>
                  </div>
                  <div className="flex justify-between items-center bg-black/30 p-2 rounded">
                    <span>Liquid exposure</span>
                    <span>75%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Automated Quality Audits */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">Automated Quality Audits</h3>
            <p className="text-gray-400 mb-6">
              Ensure complete oversight by automating quality checks across all interactions
            </p>
            
            <div className="flex-grow bg-[#181818] rounded-lg border border-white/5 overflow-hidden">
              <div className="p-4">
                <div className="bg-[#232323] p-3 rounded-md mb-4">
                  <span className="text-sm font-medium">SOP coverage</span>
                  
                  <div className="space-y-3 mt-3">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Greeting & Introduction</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <XCircle className="h-4 w-4 text-red-500 mr-2" />
                      <span>Customer Sentiment</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Action</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Closure</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center bg-[#232323] p-3 rounded-md text-sm">
                  <div className="mr-2">
                    <span className="text-gray-400">👤</span>
                  </div>
                  <div>
                    <span>As a loyal customer, I find this experience very </span>
                    <span className="bg-purple-700/70 px-2 py-0.5 rounded">disappointing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Intelligent Conversations */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">Intelligent Conversations</h3>
            <p className="text-gray-400 mb-6">
              Seamlessly integrate data sources and SOPs to generate accurate responses and actions
            </p>
            
            <div className="flex-grow bg-[#181818] rounded-lg border border-white/5 overflow-hidden">
              <div className="p-4">
                {/* Chat interface mockup */}
                <div className="bg-[#232323] rounded-lg p-3 mb-3 relative">
                  <div className="w-20 h-1 bg-gray-700 rounded-full mx-auto absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                  
                  <div className="space-y-4 mt-4">
                    <div className="bg-purple-600 text-white p-3 rounded-lg ml-8 text-sm">
                      Hello, how can I assist you today?
                    </div>
                    
                    <div className="bg-[#333333] p-3 rounded-lg mr-8 text-sm">
                      I received a spilled coffee.
                    </div>
                    
                    <div className="bg-purple-600 text-white p-3 rounded-lg ml-8 text-sm">
                      Please upload an image of the spilled coffee so that I can assist you better.
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="bg-[#333333] p-1.5 rounded-full mr-8">
                        <div className="w-6 h-6 rounded-full bg-gray-600"></div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-600 text-white p-3 rounded-lg ml-8 text-sm">
                      Thanks for the image! I was able to verify the spillage. Would you like a replacement or refund?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Voice AI Agents */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">Voice AI Agents</h3>
            <p className="text-gray-400 mb-6">
              Build and deploy low-cost voice AI agents that talk and take actions like humans
            </p>
            
            <div className="flex-grow bg-[#181818] rounded-lg border border-white/5 overflow-hidden">
              <div className="p-5">
                <div className="space-y-3">
                  <div className="bg-[#232323] rounded-md p-3 flex items-center">
                    <div className="mr-3">🎤</div>
                    <span>Low latency audio streaming</span>
                  </div>
                  
                  <div className="bg-[#232323] rounded-md p-3 flex items-center">
                    <div className="mr-3">🌐</div>
                    <span>Multilingual support</span>
                  </div>
                  
                  <div className="bg-[#232323] rounded-md p-3 flex items-center">
                    <div className="mr-3">📞</div>
                    <span>Function calling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Powered Analytics */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">AI Powered Analytics</h3>
            <p className="text-gray-400 mb-6">
              Identify issues, ask questions and unlock valuable insights from your interactions
            </p>
            
            <div className="flex-grow bg-[#181818] rounded-lg border border-white/5 overflow-hidden">
              <div className="p-5">
                <div className="bg-[#232323] rounded-lg p-3 mb-4 flex items-center">
                  <div className="mr-2">🔍</div>
                  <span className="text-gray-400">Type your question</span>
                </div>
                
                <div className="bg-[#232323] rounded-lg p-3 text-sm text-gray-300">
                  Which queries are best suited for automated responses?
                </div>
              </div>
            </div>
          </div>
          
          {/* Agent Co-pilot */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">Agent Co-pilot</h3>
            <p className="text-gray-400 mb-6">
              Assist your team with real-time personalized customer insights and actions
            </p>
            
            <div className="flex-grow bg-[#181818] rounded-lg border border-white/5 overflow-hidden">
              <div className="p-5 space-y-4">
                <div className="bg-[#232323] rounded-md p-3">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">💬</div>
                    <span className="font-medium">Chat Summarization</span>
                  </div>
                  <p className="text-sm text-gray-400">Summarizes conversations to keep agents focused</p>
                </div>
                
                <div className="bg-[#232323] rounded-md p-3">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">🧠</div>
                    <span className="font-medium">Smart Suggestions</span>
                  </div>
                  <p className="text-sm text-gray-400">Accurate and policy driven response suggestions</p>
                </div>
                
                <div className="bg-[#232323] rounded-md p-3">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">⚡</div>
                    <span className="font-medium">Contextual Actions</span>
                  </div>
                  <p className="text-sm text-gray-400">Recommends optimal actions for quicker resolution</p>
                </div>
                
                <div className="bg-[#232323] rounded-md p-3">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">🔄</div>
                    <span className="font-medium">Real-Time Assistance</span>
                  </div>
                  <p className="text-sm text-gray-400">Smartly engages with data sources to provide updated information</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fluid Integrations */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">Fluid Integrations</h3>
            <p className="text-gray-400 mb-6">
              Integrate seamlessly with tools like Freshdesk, Zoho, and more
            </p>
            
            <div className="flex-grow bg-[#181818] rounded-lg border border-white/5 overflow-hidden flex items-center justify-center">
              <div className="p-5 relative w-full h-full flex items-center justify-center">
                {/* Central hub with orbital connections visualization */}
                <div className="relative">
                  {/* Central hub */}
                  <div className="w-24 h-24 bg-[#232323] rounded-full flex items-center justify-center border border-[#392F77] z-10 relative">
                    <span className="text-orange-400 font-bold">nugget</span>
                  </div>
                  
                  {/* Orbital path */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border border-[#392F77]/30 -z-10"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-[#392F77]/20 -z-10"></div>
                  
                  {/* Integration nodes */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#232323] p-2 rounded-md">
                    <span className="text-green-500">♢</span>
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#232323] p-2 rounded-md">
                    <span className="text-blue-500">⚡</span>
                  </div>
                  
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#232323] p-2 rounded-md">
                    <span className="text-blue-400">Z</span>
                  </div>
                  
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-[#232323] p-2 rounded-md">
                    <span className="text-green-400">F</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
