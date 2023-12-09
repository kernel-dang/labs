// See https://aka.ms/new-console-template for more information
var myDelegate = new MyDelegate();
var result = myDelegate.MyDelegateInstance(0);

Console.WriteLine(result);

// we can not call event from outside of class
// `event` is a special kind of multicast delegate which can only call from owner class or structure
// myDelegate.MyDelegateEvent(0); 