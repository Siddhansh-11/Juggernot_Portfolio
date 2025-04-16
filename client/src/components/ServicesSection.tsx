import { motion } from "framer-motion";
import { CheckCircle, XCircle, Globe, MousePointer } from "lucide-react";

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

        {/* Uneven grid layout - inspired by reference */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-16 border-t border-l border-white/5">
          {/* Row 1 */}
          
          {/* Accurate Image Classification - 2 cols wide */}
          <div className="md:col-span-2 border-r border-b border-white/5 pb-6">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Accurate Image Classification</h3>
              <p className="text-gray-400 mb-6">
                Enhance support by precisely categorizing images for faster resolutions
              </p>
              
              <div className="bg-[#181818] rounded-lg border border-white/5 overflow-hidden">
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
          </div>
          
          {/* Automated Quality Audits - 2 cols wide */}
          <div className="md:col-span-2 border-r border-b border-white/5 pb-6">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Automated Quality Audits</h3>
              <p className="text-gray-400 mb-6">
                Ensure complete oversight by automating quality checks across all interactions
              </p>
              
              <div className="bg-[#181818] rounded-lg border border-white/5 overflow-hidden">
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
          </div>
          
          {/* Intelligent Conversations - 2 cols wide */}
          <div className="md:col-span-2 border-r border-b border-white/5 pb-6">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Intelligent Conversations</h3>
              <p className="text-gray-400 mb-6">
                Seamlessly integrate data sources and SOPs to generate accurate responses
              </p>
              
              <div className="bg-[#181818] rounded-lg border border-white/5 overflow-hidden">
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
          </div>
          
          {/* Row 2 */}
          
          {/* Voice AI Agents - 2 cols wide */}
          <div className="md:col-span-2 border-r border-b border-white/5 pb-6">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Voice AI Agents</h3>
              <p className="text-gray-400 mb-6">
                Build and deploy low-cost voice AI agents that talk and take actions like humans
              </p>
              
              <div className="bg-[#181818] rounded-lg border border-white/5 overflow-hidden">
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
          </div>
          
          {/* AI Powered Analytics - 2 cols wide */}
          <div className="md:col-span-2 border-r border-b border-white/5 pb-6">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">AI Powered Analytics</h3>
              <p className="text-gray-400 mb-6">
                Identify issues, ask questions and unlock valuable insights from your interactions
              </p>
              
              <div className="bg-[#181818] rounded-lg border border-white/5 overflow-hidden">
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
          </div>
          
          {/* MCPs - 2 cols wide, new feature */}
          <div className="md:col-span-2 border-r border-b border-white/5 pb-6">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Multimodal Cognitive Processing</h3>
              <p className="text-gray-400 mb-6">
                Process multiple types of information just like humans, including text, images, and audio
              </p>
              
              <div className="bg-[#181818] rounded-lg border border-white/5 overflow-hidden">
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="bg-[#232323] aspect-square rounded-md flex items-center justify-center text-2xl">
                      📄
                    </div>
                    <div className="bg-[#232323] aspect-square rounded-md flex items-center justify-center text-2xl">
                      🖼️
                    </div>
                    <div className="bg-[#232323] aspect-square rounded-md flex items-center justify-center text-2xl">
                      🎵
                    </div>
                  </div>
                  
                  <div className="bg-[#232323] p-3 rounded-md mt-4">
                    <div className="h-1.5 bg-purple-600 rounded-full w-3/4 mb-2"></div>
                    <div className="h-1.5 bg-purple-600/60 rounded-full w-1/2 mb-2"></div>
                    <div className="h-1.5 bg-purple-600/40 rounded-full w-2/3"></div>
                  </div>
                  
                  <div className="bg-purple-700/20 border border-purple-700/40 rounded-md p-3 mt-4 text-sm">
                    <span className="font-medium">Insight:</span> The document suggests a correlation between audio feedback and customer satisfaction.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Row 3 */}
          
          {/* Agent Co-pilot - 2 cols wide */}
          <div className="md:col-span-2 border-r border-b border-white/5 pb-6">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Agent Co-pilot</h3>
              <p className="text-gray-400 mb-6">
                Assist your team with real-time personalized customer insights and actions
              </p>
              
              <div className="bg-[#181818] rounded-lg border border-white/5 overflow-hidden">
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
                </div>
              </div>
            </div>
          </div>
          
          {/* Browser Use - 2 cols wide, new feature */}
          <div className="md:col-span-2 border-r border-b border-white/5 pb-6">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Browser Use Control</h3>
              <p className="text-gray-400 mb-6">
                Allow your AI to browse the web, research, and interact with online tools
              </p>
              
              <div className="bg-[#181818] rounded-lg border border-white/5 overflow-hidden">
                <div className="px-5 pt-5">
                  <div className="bg-[#232323] rounded-t-md p-2 flex items-center border-b border-white/10">
                    <div className="flex space-x-1.5 mr-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="bg-[#333333] rounded-full px-3 py-1 text-xs flex-grow text-center text-gray-400">
                      https://www.example.com/research
                    </div>
                  </div>
                  
                  <div className="bg-[#232323] p-3 overflow-hidden">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium">Browsing in progress</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <MousePointer className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                        <span className="text-xs text-gray-400">Searching for "latest AI research papers 2025"</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MousePointer className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                        <span className="text-xs text-gray-400">Analyzing content from academic database</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MousePointer className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                        <span className="text-xs text-gray-400">Extracting relevant information for your query</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 border-t border-white/10 bg-[#1D1D1D]">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs">Safe browsing enabled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fluid Integrations - 2 cols wide */}
          <div className="md:col-span-2 border-r border-b border-white/5 pb-6">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Fluid Integrations</h3>
              <p className="text-gray-400 mb-6">
                Integrate seamlessly with tools like Freshdesk, Zoho, and more
              </p>
              
              <div className="bg-[#181818] rounded-lg border border-white/5 overflow-hidden flex items-center justify-center min-h-[280px]">
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
        </div>
      </motion.div>
    </section>
  );
}
