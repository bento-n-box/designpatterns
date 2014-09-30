class Car
  def initialize(name)
    @name = name
  end

  def drive
    puts("#{@name} is Driving.")
  end

  def honk
    puts("#{@name} honk!")
  end

  def park
    puts("#{@name} is parking ")
  end
end

class Commuters
  def initialize(number_cars, name)
    @cars = []
    number_cars.times do |i|
      car = new_car(name)
      @cars << car
    end
  end

  def action
    @cars.each {|cars| cars.honk}
    @cars.each {|cars| cars.park}
    @cars.each {|cars| cars.drive}
  end
end

class Boulder < Commuters
  def new_car(name)
    Car.new(name)
  end
end

driverSet1 = Boulder.new(3, 'ford focus')
driverSet2 = Boulder.new(2, 'Hondas')
driverSet3 = Boulder.new(7, 'Dodge Darts')

driverSet1.action
driverSet2.action
driverSet3.action

