using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace CustomContractResolverModel
{
    public class MyContractResolver : DefaultContractResolver
    {
        //protected override JsonProperty CreateProperty(MemberInfo member, MemberSerialization memberSerialization)
        //{
        //    var property = base.CreateProperty(member, memberSerialization);

        //    return property;
        //}

        protected override IList<JsonProperty> CreateProperties(Type type, MemberSerialization memberSerialization)
        {
            var properties = base.CreateProperties(type, memberSerialization);

            return properties;
        }
    }
}