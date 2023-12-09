class MyDelegate
{
    /// <summary>
    /// with keyword `delegate`, we can define the signature of method
    /// when this code is combined, the MyDelegateSignature will have type <see cref="System.Delegate"/> as based class
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    public delegate int MyDelegateSignature(int input);
    public MyDelegateSignature MyDelegateInstance { get; set; }

    /// <summary>
    /// or we can define a event with type of delegate as below
    /// Note: `event` can only call in class or derived class,
    /// the event can be add/remove handler from outside, but can not raise/call event from outside of class
    /// </summary>
    public event MyDelegateSignature MyDelegateEvent;
    public MyDelegate()
    {
        MyDelegateInstance = (input) =>
        {
            return 0;
        };

        MyDelegateEvent += (input) =>
        {
            return 1;
        };
    }
}