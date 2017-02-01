module Spyscape
  module Bootstrap
    module Rails
      class Engine < ::Rails::Engine
        initializer 'spyscape.assets' do |app|
          %w(stylesheets).each do |sub|
            app.config.assets.paths << root.join('assets', sub).to_s
          end
        end
      end
    end
  end
end
