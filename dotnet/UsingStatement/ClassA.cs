class ClassA : IDisposable
{
    public ClassA()
    {
    }

    public void Dispose()
    {
        Console.WriteLine("Disposing...");
    }
}