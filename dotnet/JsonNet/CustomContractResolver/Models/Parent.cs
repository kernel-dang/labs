namespace CustomContractResolver.Model
{
    public class Parent
    {
        public string Name { get; set; }

        public Property<string> Child { get; set; }
    }
}