class CalendarsController < ApplicationController
  def index
  end

  def create
    # render text: params.to_json
    desirable = params["data"].values.select do |dat|
      dat[:id].include? "new_event"
    end

    render text: desirable.to_json
  end

  def view
    free =
    [{"start" => Time.now,
      "end" => Time.now + 1.hour,

      }]
end
